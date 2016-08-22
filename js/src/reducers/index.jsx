import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import sample from './sample';

const rootReducer = combineReducers({
  routing,
  sample,
});

export default rootReducer;
