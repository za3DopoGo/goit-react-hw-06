import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <p>Find contact by name</p>
      <input
        className={css.input}
        value={filter}
        type="text"
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
