import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import SellIcon from '@mui/icons-material/Sell';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import { Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
// search option setting
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

export default function Navbar() { 
  const [anchorEl, setAnchorEl] = React.useState(null);
  // if admin login user available set true 
  const [auth, setAuth] = React.useState(true); 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = ()=>{
    setAnchorEl(null);
    // move to  loginPage 
  }
  // const handleAdminPage = ()=>{
  //   setAnchorEl(null);
  // }
  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ flexGrow: 1, height:'10vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color:"orange", marginLeft:"10%" }}
          >
          <Link to="/" style={{color: 'orange', textDecoration:'none'}}> 
            Sinka
          </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex',} }}>
            <Link to="/" style={{color: 'orange'}}> 
            <IconButton size="large" aria-label="Home" color="inherit">
                <HomeIcon />
            </IconButton>
            </Link>
            {/* <Link to="/sells" style={{color: 'orange'}}>
            <IconButton size="large" aria-label="account" color="inherit">
                <SellIcon />
            </IconButton>
            </Link> */}
            <Link to="/account" style={{color: 'orange'}}>
            <IconButton size="large" aria-label="account" color="inherit">
                <CurrencyRupeeIcon />
            </IconButton>
            </Link>
            <Link to="/kot" style={{color: 'orange'}}>
            <IconButton size="large" aria-label="account" color="inherit">
                <SoupKitchenIcon />
            </IconButton>
            </Link>
            
            {/* app bar with responsive menu */}
            {true ?(
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                style={{color:'orange'}}

              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/admin" style={{color: 'white', textDecoration:'none'}}>
                  <MenuItem onClick={handleClose}>Admin Panel</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>Logout <LogoutIcon style={{color:'orange'}} fontSize='small'/> </MenuItem>
              </Menu>
            </div>
          ):
          <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                style={{color:'orange'}}

              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <Link to="/login" style={{color: 'white', textDecoration:'none'}}>
                <MenuItem onClick={handleLogin}>
                  Login <LoginIcon style={{color:'orange'}} fontSize='small'/> 
                  </MenuItem>
              </Link>
              </Menu>
            </div>
          }
          {/* --------------------- */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
