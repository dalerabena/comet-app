import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuList from './menuList';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{MenuList}</List>
        <Divider />
        <List>{MenuList}</List>
      </div>
    );

    const fullList = (
      <div className={classes.listFull}>
        <List>{MenuList}</List>
        <Divider />
        <List>{MenuList}</List>
      </div>
    );

    const menuButton = {
      marginLeft: -10,
      marginRight: 10
    };

    return (
      <div>
        <IconButton style={menuButton} color="contrast" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
            <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <div className={classes.list}>
              <MenuList />
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);