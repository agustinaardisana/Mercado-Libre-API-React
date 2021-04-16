import "./Header.scss";
import { useState } from "react";

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

const Header = ({ handleSearch, handleClickHome, userInput, setUserInput }) => {
  const classes = useStyles();

  const handleChangeInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      handleSearch(e.target.value);
    }
  };

  return (
    <header>
      <h1 onClick={handleClickHome}>mercado libre</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Buscar productos, marcas y más..."
          variant="outlined"
          type="text"
          value={userInput}
          onKeyDown={handleSubmit}
          onChange={handleChangeInput}
        />
      </form>
    </header>
  );
};

export default Header;
