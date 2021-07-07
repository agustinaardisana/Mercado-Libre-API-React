import CheckboxFilter from "./CheckboxFilter";
import "./Filters.scss";

const Filters = () => {
  return (
    <aside aria-labelledby="filters--title">
      <h2 id="filters--title">FILTROS</h2>
      <div className="filters--container">
        <h3>CATEGORÍA</h3>
        <label for="free-shipping__filter">
          {/* <input
            // class="filtro-categoria"
            type="checkbox"
            name="categoria-consolas"
            id="free-shipping__filter"
            value="free_shipping"
          />
          Envío Gratis */}
        </label>
        <CheckboxFilter value={"free_shipping"} label={"Envío Gratis"} />
      </div>
    </aside>
  );
};

export default Filters;
