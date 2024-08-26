import css from "./SearchBox.module.css";

function SearchBox({ filter, handleFilterChange }) {
  const handleInputChange = (event) => {
    handleFilterChange(event.target.value);
  };
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Find contacts by name</p>
      <input
        type="text"
        name="searchName"
        className={css.input}
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBox;
