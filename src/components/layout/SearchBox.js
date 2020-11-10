import React from "react";


const SearchBox =  ({handleChange , value, onSubmit}) =>{
  return (
    <div>
      <form id="form" onSubmit={(e) => onSubmit(e)}>
        <input
          className="search-box"
          placeholder="Search with Asteroid ID"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
