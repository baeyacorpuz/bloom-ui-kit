import { Avatar, Collapse, Divider, Drawer, Hidden, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography, useTheme } from '@material-ui/core';
import { ExpandLess, ExpandMore  } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu } from '../../routes/Menu';

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
    width: drawerWidth + 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  list: {
    cursor: 'pointer',
    width: drawerWidth,
    '& .MuiListItem-root': {
      textTransform: 'uppercase',
    },
  },
  link: {
    '& .MuiListItem-button': {
      height: 70
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 'inherit'
  },
}))

const Header = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const handleClick = (key) => {
    setOpen({
      [key]: !open[key]
    })
  };

  const navigate = (to) => {
    console.log(to);
    history.push(`${to}`)
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>

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
                  <Typography variant="caption">{process.env.VERSION}</Typography>
                </ListItemText>
              </ListItem>
            </NavLink>
            <div className={classes.flex}>
              <List className={classes.list}>
                {Menu.map((item, index) => (
                  <div key={index}>
                    <ListItem onClick={() => handleClick(item.to)} className={open[item.to] ? 'open' : ''}>
                      <ListItemText>
                        <Typography variant="overline">{item.label}</Typography>
                      </ListItemText>
                    </ListItem>
                    <Collapse in={open[item.to]} timeout="auto" unmountOnExit>
                      {item.items ? (
                        item.items.map((subItem) => (
                          <List disablePadding component="div" key={subItem.key}>
                            <NavLink to={`/${subItem.key}`} activeClassName="active">
                              <ListItem button dense>
                                <ListItemText>
                                  <Typography variant="overline">{subItem.label}</Typography>
                                </ListItemText>
                              </ListItem>
                            </NavLink>
                          </List>
                        ))
                      ) : null}
                    </Collapse>
                  </div>
                ))}
              </List>
              <ListItem button onClick={() => history.push('/settings')}>
                <ListItemText>
                  <Typography variant="overline">Settings</Typography>
                </ListItemText>
              </ListItem>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default Header;