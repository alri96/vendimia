import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import DropDownMenu from 'material-ui/DropDownMenu';

export default class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap() => {
    // This prevents ghost click.
    preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

const MyAwesomeReactComponent = () => (

  <AppBar
   iconElementLeft={
    <PopoverExampleSimple/>
      }
   iconElementRight={
     <IconMenu
       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}

       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
       targetOrigin={{horizontal: 'right', vertical: 'top'}}
     >
       <MenuItem primaryText="Refresh" />
       <MenuItem primaryText="Send feedback" />
       <MenuItem primaryText="Settings" />
       <MenuItem primaryText="Help" />
       <MenuItem primaryText="Sign out" />
     </IconMenu>
   }
 />
);


export default MyAwesomeReactComponent;
