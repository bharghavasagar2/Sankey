import { combineReducers } from '@reduxjs/toolkit';

import sanKeyreducer from './sanKeySlice';

const rootReducer = combineReducers({
  sanKey: sanKeyreducer,
});

export default rootReducer;
