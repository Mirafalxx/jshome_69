import axios from "axios";

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";
export const GET_SERIASLIST_SUCCESS = "GET_SERIASLIST_SUCCESS";
export const GET_PICKED_SERIES_SUCCESS = "GET_PICKED_SERIES_SUCCESS";

export const getSerialListSuccess = (serials) => ({
  type: GET_SERIASLIST_SUCCESS,
  serials,
});
export const getPickedSeries = (movie) => ({
  type: GET_PICKED_SERIES_SUCCESS,
  movie,
});

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
});

export const searchSerial = (val) => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://api.tvmaze.com/search/shows?q=" + val
    );
    const fetchedSerials = [];
    if (response.data) {
      for (let key in response.data) {
        fetchedSerials.unshift({
          ...response.data[key],
          id: key,
        });
      }
    }
    dispatch(getSerialListSuccess(fetchedSerials));
  };
};
export const pickedMovie = (movieId) => {
  return async (dispatch) => {
    const response = await axios.get("http://api.tvmaze.com/shows/" + movieId);
    dispatch(getPickedSeries(response.data));
  };
};
