import { Drawer, Hidden, List, ListItem, ListItemText, makeStyles, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from '../../routes/Menu';
import "./header.css"

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
    width: drawerWidth,
    '& .MuiSvgIcon-root': {
      color: '#0048B4'
    },
    '& .MuiListItem-root': {
      textTransform: 'uppercase',
      display: 'block'
    },
    // & .MuiListItem-root
  },
  link: {
    '& .MuiListItem-button': {
      height: 70
    }
  },
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

  const handleDropdown = (event) => {
    const el = event.currentTarget;

    const parent = el.parentNode;
    console.log(parent.childNodes)

    parent.childNodes.forEach(element => {
      if (element !== el) {
        element.classList.remove("open");
      }
    })

    if (el.classList.contains("treeview")) {
      if (!el.classList.contains("open")) {
        console.log(el)
        el.classList.add("open");
        el.classList.add("menu-open");
        el.getElementsByTagName("ul")[0].style.display = "block";
      } else {
        el.classList.remove("open");
        el.classList.remove("menu-open");
        el.getElementsByTagName("ul")[0].style.display = "none";
      }
    }
  }

  const navigationOnClick = (event) => {
    if (event.currentTarget.classList.contains("treeview-option")) {
      event.currentTarget.parentNode.parentNode.classList.add("active");
    } else {
      event.currentTarget.classList.add("active");
    }
    event.stopPropagation();
  }

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
            <List className={classes.list}>
              {Menu.map((item, index) => (
                <div key={index}>
                  <ListItem className="treeview" button onClick={handleDropdown}>
                    <ListItemText>
                      <Typography variant="body2">{item.label}</Typography>
                    </ListItemText>
                    <List className="treeview-menu">
                      {item.items ? (
                        item.items.map((subItem) => (
                          <NavLink key={subItem.key} className="treeview-option" to={subItem.key} onClick={navigationOnClick}>
                            <ListItem>
                              <ListItemText>
                                <Typography variant="body2">{subItem.label}</Typography>
                              </ListItemText>
                            </ListItem>
                          </NavLink>
                        ))
                      ) : null}
                    </List>
                  </ListItem>
                </div>
              ))}
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default Header;