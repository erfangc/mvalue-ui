'use strict';

import React from 'react';
import {FormComponent, NumberField, MoneyField, PercentageField} from './FormComponent';

class MtgAssumptionsComponent extends FormComponent {

  render() {
    const {
      nper,
      rate,
      homePrice,
      ltv
    } = this.props;

    return (
      <div className='mtgassumptions-component'>
        <h4>Mortgage Assumption</h4>
        <NumberField
          floatingLabelText='No. of Payments'
          initialValue={nper}
          onChange={v=>this.updateState('nper', v)}/>
        <PercentageField
          floatingLabelText='Interest Rate'
          initialValue={rate}
          onChange={v=>this.updateState('rate', v)}/>
        <MoneyField
          floatingLabelText='Home Price'
          initialValue={homePrice}
          onChange={v=>this.updateState('homePrice', v)}/>
        <PercentageField
          floatingLabelText='Loan-to-Value'
          initialValue={ltv}
          onChange={v=>this.updateState('ltv', v)}/>
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
