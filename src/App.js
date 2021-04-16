import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import siteLogo from "./assets/logo_mercadolibre.png";
import ProductDescription from "./components/ProductDescription";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [userInput, setUserInput] = useState("");
  const [view, setView] = useState("home");
  const [id, setId] = useState("");

  useEffect(() => {
    const baseURL = `https://api.mercadolibre.com/`;
    const searchPath = `sites/MLA/search?q=`;
    const singleProductPath = `items/`;
    const path = id ? `${singleProductPath}${id}` : `${searchPath}${search}`;

    fetch(baseURL + path)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        id ? setProducts(data) : setProducts(data.results);
      });
  }, [search, id]);

  const handleSearch = (userInput) => {
    setView("productsList");
    setSearch(userInput);
  };

  const handleClickHome = () => {
    setSearch("");
    setUserInput("");
    setView("home");
  };

  return (
    <main>
      <Header
        handleClickHome={handleClickHome}
        handleSearch={handleSearch}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <section>
        {view === "home" && <img src={siteLogo} alt="site logo"></img>}
        {view === "productsList" && (
          <ProductCard products={products} setView={setView} setId={setId} />
        )}
        {view === "productDescription" && (
          <ProductDescription products={products} />
        )}
      </section>
    </main>
  );
};

export default App;
