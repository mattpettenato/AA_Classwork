import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';

const errorReducer = combineReducers({
  session: SessionErrorsReducer
});

export default errorReducer