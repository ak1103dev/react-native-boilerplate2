import generateType from '../../../utils/asyncActionTypes';

export const NAME = 'home';

export const SAY_HELLO = `${NAME}/SAY_HELLO`;
export const SAY_HI = `${NAME}/SAY_HI`;

export const LOAD_DATA = generateType(NAME, 'LOAD_DATA');
