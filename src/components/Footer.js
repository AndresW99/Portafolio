import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Twitter />} className={classes.root} href={ 'https://twitter.com/NvidiA_99' }/>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} href={ 'https://www.linkedin.com/in/andres-wellmann-70aba71b5/' }/>
      <BottomNavigationAction icon={<Instagram />} className={classes.root} href={ 'https://www.instagram.com/awellmann99' }/>
    </BottomNavigation>
  );
};
export default Footer;
