import {
  SAY_HELLO,
  SAY_HI,
} from './constants';

export const sayHello = () => ({
  type: SAY_HELLO,
});

export const sayHi = name => ({
  type: SAY_HI,
  name,
});
