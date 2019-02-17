import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = ({
  formAreaCell: {
    marginTop: '4em',
  },
  bottomAreaCell: {
    marginBottom: '4em'
  }
});


class SingleFormLayout extends React.Component {

  componentDidMount () {
    this.props.onComponentDidMount();
  }

  render() {
    const {classes, formArea, bottomArea} = this.props;
    return (
      <Grid container={true} direction="column" alignItems="center" spacing={16}>
        <Grid item={true} className={classes.formAreaCell}>
          {formArea}
        </Grid>
        <Grid item={true} className={classes.bottomAreaCell}>
          {bottomArea}
        </Grid>
      </Grid>
    );
  }
}

SingleFormLayout.propTypes = {
  onComponentDidMount: PropTypes.func,
  formArea: PropTypes.element,
  bottomArea: PropTypes.element,
};

SingleFormLayout.defaultProps = {
  onComponentDidMount: () => {},
  formArea: null,
  bottomArea: null,
};

export default withStyles(styles)(SingleFormLayout);
