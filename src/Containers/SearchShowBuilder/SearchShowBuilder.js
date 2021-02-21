import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PickedSeries from "../../Components/PickedSeries/PickedSeries";
import SearchResult from "../../Components/SearchResult/SearchResult";
import SearchShow from "../../Components/SearchShow/SearchShow";
import "./SearchShowBuilder.css";
import {
  changeSearchValue,
  pickedMovie,
  searchSerial,
} from "../../store/actions/actions";

const SearchShowBuilder = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const movieIMG = useSelector((state) => state.pickedShow);
  const changeHandler = (e) => {
    dispatch(changeSearchValue(e.target.value));
    dispatch(searchSerial(state.searchValue));
  };

  const getMovie = (id) => {
    dispatch(pickedMovie(id));
  };

  return (
    <div className="container">
      <div className="SearchForm">
        <SearchShow change={changeHandler} value={state.searchValue} />
      </div>

      <div className="customAutoComplete">
        {state.searchShow.map((series) => {
          return (
            <SearchResult
              key={series.show.id}
              seriesTitle={series.show.name}
              showDetail={() => getMovie(series.show.id)}
            />
          );
        })}
      </div>
      <PickedSeries
        imgHref={movieIMG.image ? movieIMG.image.medium : null}
        title={state.pickedShow.name}
        description={state.pickedShow.summary}
      />
    </div>
  );
};

export default SearchShowBuilder;
