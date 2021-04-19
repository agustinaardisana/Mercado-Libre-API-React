import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Spinner from "./components/Spinner";
import siteLogo from "./assets/logo_mercadolibre.png";
import siteLogoResponsive from "./assets/logo_responsive.png";
import ProductDescription from "./components/ProductDescription";

const App = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [userInput, setUserInput] = useState("");
  const [view, setView] = useState("home");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = `https://api.mercadolibre.com/`;

  useEffect(() => {
    const searchPath = `sites/MLA/search?q=${search}`;

    fetch(baseURL + searchPath)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.results);
        setIsLoading(false);
      });
  }, [search]);

  useEffect(() => {
    const singleProductPath = `items/${id}`;

    fetch(baseURL + singleProductPath)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetails(data);
        setSearch("");
        setUserInput("");
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}/description`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDescription(data.plain_text);
      });
  }, [id]);

  const handleSearch = (userInput) => {
    setView("productsList");
    setSearch(userInput);
    setIsLoading(true);
  };

  const handleClickHome = () => {
    setSearch("");
    setUserInput("");
    setView("home");
    setIsLoading(true);
  };

  const handleClickSeeMore = (cardId) => {
    setView("productDescription");
    setId(cardId);
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
        {isLoading && <Spinner />}
        {view === "home" && (
          <img
            src={window.innerWidth > 1100 ? siteLogo : siteLogoResponsive}
            alt="site logo"
          ></img>
        )}
        {view === "productsList" && (
          <ProductCard
            products={products}
            handleClickSeeMore={handleClickSeeMore}
          />
        )}
        {view === "productDescription" && (
          <ProductDescription
            productDetails={productDetails}
            description={description}
          />
        )}
      </section>
    </main>
  );
};

export default App;
