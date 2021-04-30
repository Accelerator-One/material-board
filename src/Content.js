// Environment dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Page component(s)
import Home from './pages/Home.js';
import Settings from './pages/Settings.js';

// Redux initialization
import { Provider } from 'react-redux';
import store from './assets/store.js';

// Content panel
class Content extends React.Component {

  conditionalRouter = () => {

    const path = String(this.props.location.pathname);
    if (path.endsWith('/settings'))
      return <Settings />;

    return <Home />;
  }

  render() {
    return (
      <Provider store={store}>
        { this.conditionalRouter()}
      </Provider>
    )
  }
};

export default withRouter(Content);
