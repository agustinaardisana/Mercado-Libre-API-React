import "./ProductDescription.scss";

const ProductDescription = ({ products }) => {
  return (
    <div>
      <p>
        {products.condition} - {products.sold_quantity} vendidos
      </p>
      <h3>{products.title}</h3>
      <img src={products.pictures[0].url}></img>
      <p>${products.base_price}</p>
      <a href={products.permalink}>
        <button>Comprar</button>
      </a>
    </div>
  );
};

export default ProductDescription;
