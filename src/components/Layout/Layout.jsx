import { Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operation';
import { StickyFooter } from 'components/Footer';
import { selectLoadingUser } from 'redux/auth';
import { Loader } from 'components/Loader';

const drawerWidth = 240;
const navItems = [
  { path: '/', name: 'Home' },
  { path: '/contacts', name: 'Contacts' },
  { path: '/login', name: 'LogIn' },
  { path: '/register', name: 'Register' },
];

export const DrawerAppBar = props => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingUser);
  const { isLoggedIn, user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#ff784e',
        height: '100vh',
      }}
    >
      <Typography variant="h6" sx={{ my: 2, color: '#fff' }}>
        KIDS CONTACTS
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.name} disablePadding>
            <NavLink to={item.path} style={{ color: 'white' }}>
              <ListItemButton
                sx={{
                  textAlign: 'center',
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          overflowY: 'hidden',
        }}
      >
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                color: '#fff',
              }}
            >
              KIDS CONTACTS
            </Typography>
            {isLoggedIn ? (
              <>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 400,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {`Welcome back! ${user?.email}`}
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button
                    key="logout"
                    onClick={handleLogOut}
                    sx={{
                      color: 'white',
                      display: 'block',
                      backgroundColor: '#52b202',
                    }}
                  >
                    {'Logout'}
                  </Button>
                </Box>
              </>
            ) : (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <NavLink to="/login">
                  <Button
                    key="login"
                    onClick={() => null}
                    sx={{
                      my: 1,
                      color: 'white',
                      display: 'block',
                    }}
                  >
                    {'LogIn'}
                  </Button>
                </NavLink>
                <NavLink to="/register">
                  <Button
                    key="register"
                    onClick={() => null}
                    sx={{
                      my: 1,
                      color: 'white',
                      display: 'block',
                    }}
                  >
                    {'Register'}
                  </Button>
                </NavLink>
              </Box>
            )}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavLink to="/">
                <Button
                  key="home"
                  sx={{ my: 1, display: 'block', color: '#fff' }}
                >
                  {'HOME'}
                </Button>
              </NavLink>
              {isLoggedIn && (
                <NavLink to="/contacts">
                  <Button
                    key="contacts"
                    sx={{ my: 1, display: 'block', color: '#fff' }}
                  >
                    {'CONTACTS'}
                  </Button>
                </NavLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box
          component="main"
          sx={{
            p: { sm: 1, xs: 0 },
            paddingBottom: { sm: '8px', xs: '0px' },
          }}
        >
          <Toolbar />
          {isLoading && <Loader />}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
      <StickyFooter />
    </>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};
