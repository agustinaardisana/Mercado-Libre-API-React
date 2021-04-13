import "./Header.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "55ch",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <h1>mercado libre</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Buscar productos, marcas y más..."
          variant="outlined"
        />
      </form>
    </header>
  );
};

export default Header;
