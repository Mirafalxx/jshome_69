import {
  CHANGE_SEARCH_VALUE,
  GET_PICKED_SERIES_SUCCESS,
  GET_SERIASLIST_SUCCESS,
} from "../store/actions/actions";
const initialState = {
  searchValue: "",
  searchShow: [],
  pickedShow: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    case GET_SERIASLIST_SUCCESS:
      return { ...state, searchShow: action.serials };
    case GET_PICKED_SERIES_SUCCESS:
      return { ...state, pickedShow: action.movie };
  }
  return state;
};

export default reducer;
