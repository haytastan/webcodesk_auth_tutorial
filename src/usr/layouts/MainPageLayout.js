import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

class MainPageLayout extends React.Component {
  static propTypes = {
    onComponentDidMount: PropTypes.func,
  };

  static defaultProps = {
    onComponentDidMount: () => {},
  };

  componentDidMount () {
    this.props.onComponentDidMount();
  }

  render () {
    return (
      <Grid container={true} justify="center" alignContent="center">
        <Grid>
          <h1>Hello, this is a main page!</h1>
        </Grid>
      </Grid>
    );
  }
}

export default MainPageLayout;
