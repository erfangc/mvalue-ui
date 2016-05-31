/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React from 'react';
import {connect} from 'react-redux';
import MainComponent from '../components/MainComponent';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/* Populated by react-webpack-redux:reducer */
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <MainComponent irr={this.props.irr}/>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    irr: state.irr
  };
}

export default connect(mapStateToProps)(App);
