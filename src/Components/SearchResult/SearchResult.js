import React from "react";
import "./SearchResult.css";

const SearchResult = ({ seriesTitle, showDetail }) => {
  return (
    <p onClick={showDetail} className="AutoCompleteItem">
      {seriesTitle}
    </p>
  );
};

export default SearchResult;
