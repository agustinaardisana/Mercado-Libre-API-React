import "./ProductCard.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductCard = ({ products }) => {
  const classes = useStyles();

  return (
    <>
      {products.map((product) => {
        return (
          <article key={product.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.thumbnail}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <div>
                    {/* {product.shipping.free_shipping && LocalShippingIcon} */}
                    {product.shipping.free_shipping && "free shipping"}
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    $ {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver Más
                </Button>
              </CardActions>
            </Card>
          </article>
        );
      })}
    </>
  );
};

export default ProductCard;
