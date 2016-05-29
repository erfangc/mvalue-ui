import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MtgAssumptionsComponent from '../components/MtgAssumptionsComponent';
import IncomeAssumptionsComponent from '../components/IncomeAssumptionsComponent';

let config = require('config').default;
import * as $ from 'jquery';

class Assumptions extends React.Component {

  submit() {
    let {submitAnalysis} = this.props;
      const assumptions = {
        mtgAssumptions: this.mtgAssumption.getStateWithFallback(),
        incomeStatementAssumptions: this.incomeAssumption.getStateWithFallback()
      };
    debugger;
      submitAnalysis(assumptions);
  }

  render() {
    return (
      <div className='assumptions-component'>
        <Grid>
          <Row>
            <Col md={4}>
              <MtgAssumptionsComponent ref={node=>this.mtgAssumption= node}/>
            </Col>
            <Col md={8}>
              <IncomeAssumptionsComponent ref={node=>this.incomeAssumption = node}/>
            </Col>
          </Row>
        </Grid>
        <RaisedButton label='Submit' primary={true} onClick={()=>this.submit()}/>
        <br/><br/>
      </div>
    );
  }
}

/**
 * A thunk inspired action creator which dispatch two events, once at the start of an async API call
 * and once when the API call returns
 * @param dispatch
 * @param assumptions
 */
function submitAnalysis(dispatch, assumptions) {
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
      dispatch({
        type: 'ANALYSIS_COMPLETE',
        data: response
      })
    },
    contentType: 'application/json'
  });
}

function mapDispatchToProps(dispatch) {
  return {
    submitAnalysis: function (assumptions) {
      submitAnalysis(dispatch, assumptions);
    }
  };
}

export default connect(null, mapDispatchToProps)(Assumptions);
