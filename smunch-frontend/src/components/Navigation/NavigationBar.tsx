import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationBar(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useNavigate();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    history('/profile');
    handleClose();
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ flexGrow: "1" }}>
            <IconButton size="medium" edge="end" color="inherit" aria-label="account" aria-haspopup="true" onClick={handleClick} >
              <AccountCircle />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>

          <div>
            <Button color="inherit" onClick={() => history('/')}>Home</Button>
            <Button color="inherit" onClick={() => history('/resturants')}>Resturants</Button>
            <Button color="inherit" onClick={() => history('/about')}>About</Button>
            <Button color="inherit" onClick={() => history('/contact')}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;