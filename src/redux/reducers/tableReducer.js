import * as api from '../../api/api';
import {showMessage, startLoading, stopLoading} from "./globalReducer";
import {getDataByPage, searchByText, sortByKey} from "../utils";

const PAGE_SIZE = 50;
const SET_DATA = 'SET_DATA';
const ADD_DATA = 'ADD_DATA';
const SEARCH = 'SEARCH';
const CHANGE_SORT = 'CHANGE_SORT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initial = {
  allData: null,
  currentPage: 1,
  pageCount: 0,
  visibleData: null,
  sortParams: {
    by: null,
    isDescendingOrder: false
  }
};

const tableReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_DATA: {
      const data = action.payload;

      return {
        ...state,
        allData: data,
        pageCount: Math.ceil(data.length / PAGE_SIZE),
        visibleData: getDataByPage(data, state.currentPage, PAGE_SIZE)
      };
    }

    case ADD_DATA: {
      const item = action.payload;
      const newData = [item, ...state.allData];

      return {
        ...state,
        allData: newData,
        visibleData: getDataByPage(newData, state.currentPage, PAGE_SIZE)
      };
    }

    case CHANGE_SORT: {
      const key = action.payload;
      const isNewKey = state.sortParams.by !== key;

      const newData = isNewKey
        ? [...sortByKey(key, state.allData)]
        : [...state.allData.reverse()];

      return {
        ...state,
        allData: newData,
        visibleData: getDataByPage(newData, state.currentPage, PAGE_SIZE),
        sortParams: {
          ...state.sortParams,
          by: key,
          isDescendingOrder: isNewKey
            ? false
            : !state.sortParams.isDescendingOrder
        }
      };
    }

    case SEARCH: {
      const searchString = action.payload;

      if (!searchString) return {...state, visibleData: state.allData};

      return {
        ...state,
        visibleData: searchByText(state.allData, searchString)
      };
    }

    case SET_CURRENT_PAGE: {
      const page = action.payload;

      return {
        ...state,
        visibleData: getDataByPage(state.allData, page, PAGE_SIZE),
        currentPage: page
      };
    }

    default:
      return state;
  }
}

export const setData = data =>
  ({type: SET_DATA, payload: data})

export const addData = data =>
  ({type: ADD_DATA, payload: data})

export const search = text =>
  ({type: SEARCH, payload: text})

export const changeSort = filter =>
  ({type: CHANGE_SORT, payload: filter})

export const setCurrentPage = page =>
  ({type: SET_CURRENT_PAGE, payload: page})

export const getSmallData = () => {
  return dispatch => {
    dispatch(startLoading());

    api.getSmallData()
      .then(res => dispatch(setData(res.data)))
      .catch(err => dispatch(showMessage('danger', err.message)))
      .finally(() => dispatch(stopLoading()));
  }
}

export const getBigData = () => {
  return dispatch => {
    dispatch(startLoading());

    api.getBigData()
      .then(res => dispatch(setData(res.data)))
      .catch(err => dispatch(showMessage('danger', err.message)))
      .finally(() => dispatch(stopLoading()));
  }
}

export default tableReducer;