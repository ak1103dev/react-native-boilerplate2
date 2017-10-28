import {
  SAY_HELLO,
  SAY_HI,
} from './constants';

const initialState = {
  message: 'Welcome',
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
    default:
      return state;
  }
}
