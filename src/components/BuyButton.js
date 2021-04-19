import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const BuyButton = ({ href }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href={href}
        target="_blank"
        style={{ width: "80%" }}
      >
        COMPRAR
      </Button>
    </div>
  );
};

export default BuyButton;
