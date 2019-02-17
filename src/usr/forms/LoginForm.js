import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = ({
  root: {
    width: '300px',
  },
});

class LoginForm extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    titles: PropTypes.object,
    error: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    isLoading: false,
    titles: {
      formTitle: 'Unknown Title',
      submitButtonTitle: 'Unknown Submit',
    },
    error: '',
    onSubmit: () => {},
  };

  constructor (props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onSubmit({
      email: this.emailInput.current.value,
      password: this.passwordInput.current.value
    });
  };

  render () {
    const { classes, isLoading, titles, error} = this.props;
    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <Grid container={true} direction="column" spacing={16}>
          <Grid item={true}>
            <Typography align="center" variant="h6">{titles.formTitle}</Typography>
          </Grid>
          {error && !isLoading && (
            <Typography align="center" variant="subtitle2" color="error">{error}</Typography>
          )}
          {isLoading && (
            <Typography align="center" variant="subtitle2">Loading...</Typography>
          )}
          <Grid item={true}>
            <TextField
              inputRef={this.emailInput}
              variant="outlined"
              fullWidth={true}
              label="Email"
              type="text"
            />
          </Grid>
          <Grid item={true}>
            <TextField
              inputRef={this.passwordInput}
              variant="outlined"
              fullWidth={true}
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item={true} justify="center" container={true}>
            <Grid item={true}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                {titles.submitButtonTitle}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
