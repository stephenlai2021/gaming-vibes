import { useState, useContext } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import AuthContext from "../stores/authContext";
import { useRouter } from "next/router";
import { motion } from 'framer-motion'

const MobileNav = () => {
  const router = useRouter();

  const { user, login, logout, authReady } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeRoute = () => {
    setAnchorEl(null);
    router.push("/");
  };
  const handleGuidesRoute = () => {
    setAnchorEl(null);
    router.push("/guides");
    //  if (!user) {
    //    login();
    //  }
    //  router.push("/guides");
  };
  const handleLogin = () => {
    setAnchorEl(null);
    login();
  };
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <div className="mobile-nav">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="mobile-menu"
      >
        <MenuItem onClick={handleHomeRoute}>Home</MenuItem>
        <MenuItem onClick={handleGuidesRoute}>Guides</MenuItem>
        {!user && (
          <MenuItem onClick={handleLogin} className="btn">
            Login/Signup
          </MenuItem>
        )}
        {user && <MenuItem>{user.email}</MenuItem>}
        {user && (
          <MenuItem onClick={handleLogout} className="btn">
            Log out
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default MobileNav;
