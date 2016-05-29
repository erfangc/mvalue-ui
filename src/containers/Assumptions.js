import React from "react";
import {connect} from "react-redux";
import {Row, Col} from "react-bootstrap";
import RaisedButton from 'material-ui/RaisedButton';
import MtgAssumptionsComponent from "../components/MtgAssumptionsComponent";
import PropertyAssumptionsComponent from "../components/PropertyAssumptionsComponent";
import submitAnalysis from "../actions/SubmitAnalysis";

/**
 * This component renders a form for the user to type in valuation inputs
 */
class Assumptions extends React.Component {

  submit() {
    const {submitAnalysis} = this.props;
    submitAnalysis({
      mtgAssumptions: this.mtgAssumption.getFormValuesAsObject(),
      propertyAssumptions: this.propertyAssumptions.getFormValuesAsObject()
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <MtgAssumptionsComponent ref={node => this.mtgAssumption = node}/>
          </Col>
          <Col md={8}>
            <PropertyAssumptionsComponent ref={node => this.propertyAssumptions = node}/>
          </Col>
        </Row>
        <Row>
          <RaisedButton label='Submit' primary={true} onClick={()=>this.submit()}/>
        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitAnalysis: function (assumptions) {
      submitAnalysis(dispatch, assumptions);
    }
  };
}

export default connect(null, mapDispatchToProps)(Assumptions);
