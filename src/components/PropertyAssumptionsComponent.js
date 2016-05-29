'use strict';

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {FormComponent, MoneyField, PercentageField} from './FormComponent';

class PropertyAssumptionsComponent extends FormComponent {

  render() {

    const {
      rent,
      cumulativeAppreciation,
      investmentHorizonInYrs,
      commonCharges,
      propertyTax,
      insurance,
      buyingClosingCost,
      sellingClosingCost
    } = this.props;

    return (
      <div className='incomeassumptions-component'>
        <h4>Property Assumption</h4>
        <Grid>
          <Row>
            <Col md={4}>
              <h5>Revenue</h5>
              <MoneyField floatingLabelText='Rent'
                          isRequired={true}
                          initialValue={rent}
                          onChange={v => this.updateState('rent', v)}/>
              <PercentageField floatingLabelText='Total Appreciation'
                          initialValue={cumulativeAppreciation}
                          onChange={v => this.updateState('cumulativeAppreciation', v)}/><br/>
              <MoneyField floatingLabelText='Investment Horizon (Yrs)'
                          initialValue={investmentHorizonInYrs}
                          onChange={v => this.updateState('investmentHorizonInYrs', v)}/>
            </Col>
            <Col md={4}>
              <h5>Monthly Cost</h5>
              <MoneyField floatingLabelText='Common Charges'
                          initialValue={commonCharges}
                          onChange={v => this.updateState('commonCharges', v)}/><br/>
              <MoneyField floatingLabelText='Property Taxes'
                          initialValue={propertyTax}
                          onChange={v => this.updateState('propertyTax', v)}/><br/>
              <MoneyField floatingLabelText='Insurance'
                          initialValue={insurance}
                          onChange={v => this.updateState('insurance', v)}/>
            </Col>
            <Col md={4}>
              <h5>Closing Cost(s)</h5>
              <MoneyField floatingLabelText='Buying Closing Cost'
                          initialValue={buyingClosingCost}
                          onChange={v => this.updateState('buyingClosingCost', v)}/>
              <MoneyField floatingLabelText='Selling Closing Cost'
                          initialValue={sellingClosingCost}
                          onChange={v => this.updateState('sellingClosingCost', v)}/><br/>
            </Col>
          </Row>
        </Grid>
        <br/>
      </div>
    );
  }

}

PropertyAssumptionsComponent.displayName = 'IncomeAssumptionsComponent';

// Uncomment properties you need
PropertyAssumptionsComponent.propTypes = {
  investmentHorizonInYrs: React.PropTypes.number,
  cumulativeAppreciation: React.PropTypes.number,
  commonCharges: React.PropTypes.number,
  buyingClosingCost: React.PropTypes.number,
  sellingClosingCost: React.PropTypes.number,
  insurance: React.PropTypes.number,
  rent: React.PropTypes.number,
  propertyTax: React.PropTypes.number
};

PropertyAssumptionsComponent.defaultProps = {
  investmentHorizonInYrs: 11,
  cumulativeAppreciation: 0.2,
  commonCharges: 418,
  buyingClosingCost: 32000,
  sellingClosingCost: 48000,
  insurance: 300,
  rent: 3600,
  propertyTax: 250
};

export default PropertyAssumptionsComponent;
