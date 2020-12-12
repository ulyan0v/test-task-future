const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';

const initial = {
  isLoading: false,
  popup: {
    isVisible: false,
    text: '',
    type: 'danger'
  }
};

const globalReducer = (state = initial, action) => {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case STOP_LOADING: {
      return {
        ...state,
        isLoading: false
      };
    }

    case SHOW_MESSAGE: {
      const {type, text} = action.payload;

      return {
        ...state,
        popup: {
          ...state.popup,
          isVisible: true,
          type,
          text
        }
      };
    }

    case HIDE_MESSAGE: {
      return {
        ...state,
        popup: {
          ...state.popup,
          isVisible: false
        }
      };
    }

    default:
      return state;
  }
}

export const startLoading = () =>
  ({type: START_LOADING})

export const stopLoading = () =>
  ({type: STOP_LOADING})

export const showMessage = (type, text) =>
  ({type: SHOW_MESSAGE, payload: {type, text}})

export const hideMessage = () =>
  ({type: HIDE_MESSAGE})

export default globalReducer;