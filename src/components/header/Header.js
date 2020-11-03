import { AppBar, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core';
import { GitHub, Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 70,
    '& .MuiToolbar-regular': {
      minHeight: 70
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  list: {
    width: 238,
    '& .MuiSvgIcon-root': {
      color: '#0048B4'
    },
    '& .MuiListItem-root': {
      textTransform: 'uppercase'
    }
  },
  link: {
    '& .MuiListItem-button': {
      height: 70
    }
  }
}))

const Header = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <IconButton>
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            elevation={16}
          >
            <NavLink to="/" className={classes.link}>
              <ListItem button>
                <ListItemText>
                  <Typography variant="h4">Bloom<i>UI</i></Typography>
                  <Typography variant="body2">React Material UI Kit Mobile</Typography>
                </ListItemText>
              </ListItem>
            </NavLink>
            <Divider />
            <List className={classes.list}>
              <NavLink to="/installation">
                <ListItem button>
                  <ListItemText>
                    <Typography variant="body2">Installation</Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            elevation={16}
          >
            <NavLink to="/" className={classes.link}>
              <ListItem button>
                <ListItemText>
                  <Typography variant="h4">Bloom<i>UI</i></Typography>
                  {/* <Typography variant="body2">React Material UI Kit</Typography> */}
                  <Typography variant="caption">{process.env.VERSION}</Typography>
                </ListItemText>
              </ListItem>
            </NavLink>
            <Divider />
            <List className={classes.list}>
              <NavLink to="/installation">
                <ListItem button>
                  <ListItemText>
                    <Typography variant="body2">Installation</Typography>
                  </ListItemText>
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default Header;