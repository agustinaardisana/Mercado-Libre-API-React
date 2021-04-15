import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import siteLogo from "./assets/logo_mercadolibre.png";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.results);
      });
  }, [search]);

  // const handleChangeInput = (e) => {
  //   setUserInput(e.target.value);
  //   console.log(e.target.value);
  // };

  // const handleKeyDownInput = (e) => {
  //   if (e.keyCode == 13) {
  //     console.log(e.keyCode);
  //     handleChangeInput(e);
  //     setSearch(true);
  //   }
  // };

  const handleSearch = (userInput) => setSearch(userInput);

  return (
    <main>
      <Header
        // handleKeyDownInput={handleKeyDownInput}
        //userInput={userInput}
        //handleChangeInput={handleChangeInput}
        handleSearch={handleSearch}
      />
      <section>
        {!search ? (
          <img src={siteLogo} alt="site logo"></img>
        ) : (
          <ProductCard products={products} />
        )}
      </section>
    </main>
  );
};

export default App;
