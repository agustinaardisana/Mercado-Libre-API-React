import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=iphone`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.results);
      });
  }, []);
  return (
    <main>
      <Header />
      <section>
        <ProductCard products={products} />
      </section>
    </main>
  );
};

export default App;
