/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import {combineReducers} from 'redux';

/**
 * reducer that triggers an API call to the REST service end point
 * sets a a isLoading flag
 * @param state {boolean}
 * @param action
 * @returns {boolean}
 */
const isLoadingReducer = function (state = false, action) {
  switch (action.type) {
    case 'SUBMIT_ANALYSIS':
      return true;
    case 'ANALYSIS_COMPLETE':
      return false;
    default:
      return state;
    }
};

const dataReducer = function (state = [], action) {
  switch (action.type) {
    case 'ANALYSIS_COMPLETE':
          return action.data;
    default:
      return [];
  }
};

const reducers = {
  isLoading: isLoadingReducer,
  data: dataReducer
};

module.exports = combineReducers(reducers);
