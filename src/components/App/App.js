import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

class App extends Component {
  render() {

    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <Drawer />
      </MuiThemeProvider>      
    );
  }
}

export default App;