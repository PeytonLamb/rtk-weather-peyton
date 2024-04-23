import React from 'react';

const SearchInput = ({ city, onCityChange, onSearch, error }) => {
  const handleChange = (event) => {
    onCityChange(event.target.value);
  };

  const handleClick = () => {
    onSearch();
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleChange} 
        placeholder="Enter a city..."
      />
      <button onClick={handleClick}>Search</button> {}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SearchInput;
