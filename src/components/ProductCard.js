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
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

const useStyles = makeStyles({
  root: {
    maxWidth: 284,
  },
  media: {
    height: 284,
    width: 284,
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
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.title}
                  </Typography>
                  <div>
                    {product.shipping.free_shipping && (
                      <LocalShippingOutlinedIcon style={{ color: "#00a650" }} />
                    )}
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
