import React from 'react';
import { useSession, signOut, signIn } from 'next-auth/client';
import Link from 'next/link';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CreateInterval from '@/pages/index/CreateInterval';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [session, loading] = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = 'menuId';

  const handleSignout = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    signOut()
  }
  const handleSignin = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    signIn()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link href="/">FAANG Mock Interview Schedule</Link>
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Schedule
          </Button>
          <CreateInterval open={open} handleClose={handleClose} />
          {session && session.user && (
            <>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >

                {session.user.image && <Avatar alt="Remy Sharp" src={session.user.image} />}
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}><Link href="/profile">Profile</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link href="/profile/intervals">Intervals</Link></MenuItem>
                <MenuItem onClick={handleSignout}>Log out</MenuItem>
              </Menu>
            </>
          ) || <Button color="inherit" onClick={handleSignin}>Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
