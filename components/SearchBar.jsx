const SearchBar = ({ handleChange }) => {
  return (
    <div className="bg-gray-200 p-1">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-1 border rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
