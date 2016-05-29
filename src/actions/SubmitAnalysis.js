import * as $ from "jquery";
import * as _ from "lodash";

const config = require('config').default;

/**
 * A thunk inspired action creator which dispatch two events, once at the start of an async API call
 * and once when the API call returns
 * @param dispatch
 * @param assumptions
 */
export default function submitAnalysis(dispatch, assumptions) {
  // First dispatch a SUBMIT_ANALYSIS action to let the store know API call is starting
  dispatch({
    type: 'SUBMIT_ANALYSIS', assumptions
  });

  // Then make the API call, when complete dispatch the ANALYSIS_COMPLETE action
  $.ajax({
    url: `${config.serverURL}/analysis`,
    type: 'POST',
    data: JSON.stringify(assumptions),
    success: function (response) {
      dispatch(_.assign({}, {
        type: 'ANALYSIS_COMPLETE'
      }, response));
    },
    contentType: 'application/json'
  });
}
