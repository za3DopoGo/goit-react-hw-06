import css from "./SearchBox.module.css";
const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div className={css.search}>
      <p>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
