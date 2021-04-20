import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Spinner from "./components/Spinner";
import ProductDescription from "./components/ProductDescription";
import Filters from "./components/Filters";
import siteLogo from "./assets/logo_mercadolibre.png";
import siteLogoResponsive from "./assets/logo_responsive.png";

const App = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [userInput, setUserInput] = useState("");
  const [view, setView] = useState("home");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [freeShippingFilter, setFreeShippingFilter] = useState([]);
  const baseURL = `https://api.mercadolibre.com/`;

  useEffect(() => {
    if (search) {
      const searchPath = `sites/MLA/search?q=${search}`;

      fetch(baseURL + searchPath)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data.results);
          setLoading(false);
        });
    }
  }, [search]);

  useEffect(() => {
    if (id) {
      const singleProductPath = `items/${id}`;

      fetch(baseURL + singleProductPath)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProductDetails(data);
          setSearch("");
          setUserInput("");
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDescription(data.plain_text);
        });
    }
  }, [id]);

  const handleSearch = (userInput) => {
    setView("productsList");
    setSearch(userInput);
    setLoading(true);
  };

  const handleClickHome = () => {
    setSearch("");
    setUserInput("");
    setView("home");
  };

  const handleClickSeeMore = (cardId) => {
    setView("productDescription");
    setId(cardId);
    setLoading(true);
  };

  return (
    <>
      <Header
        handleClickHome={handleClickHome}
        handleSearch={handleSearch}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <main>
        {view === "productsList" && <Filters />}
        <section>
          {loading && <Spinner />}
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
    </>
  );
};

export default App;
