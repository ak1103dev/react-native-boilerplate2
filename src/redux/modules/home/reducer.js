import {
  SAY_HELLO,
  SAY_HI,
  LOAD_DATA,
} from './constants';

const initialState = {
  message: 'Welcome',
  data: [],
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAY_HELLO:
      return {
        ...state,
        message: 'Hello World',
      };
    case SAY_HI:
      return {
        ...state,
        message: `HI ${action.name}`,
      };

    case LOAD_DATA.loading:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOAD_DATA.success:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case LOAD_DATA.error:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
