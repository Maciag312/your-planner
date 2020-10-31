import React from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { setAuthentication, setJwt } from "./../Store/actions/index";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./Login.css";
import { Server } from "miragejs";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import logo_dark from "../Home/pngs/logo_dark.png";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

new Server({
  routes() {
    this.namespace = "api";

    this.get("/signin", () => {
      return "token";
    });
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "230px",
    },
  },
}));

export const Login = (props) => {
  const classes = useStyles();
  const classes2 = useStyles2();

  const signin = (username, password) => {
    fetch("/api/signin")
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.text();
      })
      .then(function (value) {
        props.setJwt(value);
        props.setAuthentication(true);
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "white",
      backgroundColor: "#6e96fe",
      borderRadius: 100,
      height: 50,
      width: 110,
      "&:hover": {
        backgroundColor: "#5878CB",
      },
    },
  }))(Button);

  return props.authenticated ? (
    <Redirect to="/Planner" />
  ) : (
    <div>
      <img src={logo_dark} alt=""></img>
      <div className={classes2.root}>
        <TextField id="standard-basic" label="nickname"></TextField>
        <br></br>
        <TextField label="password" type="password"></TextField>
        <br></br>
        <br></br>
      </div>
      <div className={classes.root}>
        <Link className="Link" to="/registration">
          Or sign in
        </Link>
        <br></br>
        <br></br>
        <div className="signinbutton">
          <ColorButton variant="contained" onClick={signin} color="primary">
            {" "}
            Sign in{" "}
          </ColorButton>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Username or password is wrong!
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
  jwt: state.jwt,
});

const mapDispatchToProps = {
  setAuthentication,
  setJwt,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
