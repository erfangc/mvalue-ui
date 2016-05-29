'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import FormComponent from './FormComponent';

class MtgAssumptionsComponent extends FormComponent {
  render() {
    return (
      <div className='mtgassumptions-component'>
          <h4>Mortgage Assumption</h4>
            <TextField
              floatingLabelText="No. of Payments"
              value={this.getWithFallback('nper')}
              onChange={e=>this.updateState('nper', e.target.value)}/>
            <TextField
              floatingLabelText="Interest Rate"
              value={this.getWithFallback('rate')}
              onChange={e=>this.updateState('rate', e.target.value)}/>
            <TextField
              floatingLabelText="Home Price"
              value={this.getWithFallback('homePrice')}
              onChange={e=>this.updateState('homePrice', e.target.value)}/>
            <TextField
              floatingLabelText="Loan-to-Value"
              value={this.getWithFallback('ltv')}
              onChange={e=>this.updateState('ltv', e.target.value)}/>
          <br/>
      </div>
    );
  }
}

MtgAssumptionsComponent.displayName = 'MtgAssumptionsComponent';

// Uncomment properties you need
MtgAssumptionsComponent.propTypes = {
  nper: React.PropTypes.number,
  rate: React.PropTypes.number,
  homePrice: React.PropTypes.number,
  ltv: React.PropTypes.number
};
MtgAssumptionsComponent.defaultProps = {
  nper: 360,
  rate: 0.0425,
  homePrice: 500000,
  ltv: 0.8
};

export default MtgAssumptionsComponent;
