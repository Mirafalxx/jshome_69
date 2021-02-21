import React from "react";

const SearchShow = ({ change, value }) => {
  return (
    <div>
      <label>
        Search for TV Show:
        <input type="text" value={value} onChange={change} />
      </label>
    </div>
  );
};

export default SearchShow;
