import "../assets/styles/searchComp.scss";
export default function SearchForm({ setSearch, handleClick }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Her kan du søke etter spill</label>
      <input type="search" id="search" onChange={handleChange}></input>
      <button onClick={handleClick}>Søk etter spill</button>
    </form>
  );
}
