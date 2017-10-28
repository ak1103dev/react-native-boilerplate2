import {
  SAY_HELLO,
  SAY_HI,
  LOAD_DATA,
} from './constants';
import ApiClient from '../../../utils/apiClient';

const client = new ApiClient();

export const sayHello = () => ({
  type: SAY_HELLO,
});

export const sayHi = name => ({
  type: SAY_HI,
  name,
});

export const loadData = () => ({
  type: LOAD_DATA.o,
  payload: client.get('https://gist.githubusercontent.com/ak1103dev/2471d8b89fd16b15200cc43312d14c07/raw/31944ab9a5755389e5f21e3c96914fd98cb31532/data.json'),
});
