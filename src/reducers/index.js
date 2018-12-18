import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import submitReducer from './submitReducer';


const rootReducer = combineReducers({
  form: formReducer,
  submittedForm: submitReducer,
});

export default rootReducer;
