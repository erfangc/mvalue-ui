'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import {Grid, Row, Col} from 'react-bootstrap';
import FormComponent from './FormComponent';

class IncomeAssumptionsComponent extends FormComponent {

  render() {
    
    return (
      <div className='incomeassumptions-component'>
        <h4>Income Statement Assumption</h4>
        <Grid>
          <Row>
            <Col md={4}>
              <h5>Revenue</h5>
              <TextField floatingLabelText='Rent'
                         value={this.getWithFallback('rent')}
                         onChange={e=>this.updateState('rent', e.target.value)}/><br/>
              <TextField floatingLabelText='Total Appreciation'
                         value={this.getWithFallback('cumulativeAppreciation')}
                         onChange={e=>this.updateState('cumulativeAppreciation', e.target.value)}/><br/>
              <TextField floatingLabelText='Investment Horizon (Yrs)'
                         value={this.getWithFallback('investmentHorizonInYrs')}
                         onChange={e=>this.updateState('investmentHorizonInYrs', e.target.value)}/>
            </Col>
            <Col md={4}>
              <h5>Monthly Cost</h5>
              <TextField floatingLabelText='Common Charges'
                         value={this.getWithFallback('commonCharges')}
                         onChange={e=>this.updateState('commonCharges', e.target.value)}/><br/>
              <TextField floatingLabelText='Property Taxes'
                         value={this.getWithFallback('propertyTax')}
                         onChange={e=>this.updateState('propertyTax', e.target.value)}/><br/>
              <TextField floatingLabelText='Insurance'
                         value={this.getWithFallback('insurance')}
                         onChange={e=>this.updateState('insurance', e.target.value)}/>
            </Col>
            <Col md={4}>
              <h5>Closing Cost(s)</h5>
              <TextField floatingLabelText='Buying Closing Cost'
                         value={this.getWithFallback('buyingClosingCost')}
                         onChange={e=>this.updateState('buyingClosingCost', e.target.value)}/>
              <TextField floatingLabelText='Selling Closing Cost'
                         value={this.getWithFallback('sellingClosingCost')}
                         onChange={e=>this.updateState('sellingClosingCost', e.target.value)}/><br/>
            </Col>
          </Row>
        </Grid>
        <br/>
      </div>
    );
  }

}

IncomeAssumptionsComponent.displayName = 'IncomeAssumptionsComponent';

// Uncomment properties you need
IncomeAssumptionsComponent.propTypes = {
  investmentHorizonInYrs: React.PropTypes.number,
  cumulativeAppreciation: React.PropTypes.number,
  commonCharges: React.PropTypes.number,
  buyingClosingCost: React.PropTypes.number,
  sellingClosingCost: React.PropTypes.number,
  insurance: React.PropTypes.number,
  rent: React.PropTypes.number,
  propertyTax: React.PropTypes.number
};

IncomeAssumptionsComponent.defaultProps = {
  investmentHorizonInYrs: 11,
  cumulativeAppreciation: 0.2,
  commonCharges: 418,
  buyingClosingCost: 32000,
  sellingClosingCost: 48000,
  insurance: 300,
  rent: 3600,
  propertyTax: 250
};

export default IncomeAssumptionsComponent;
