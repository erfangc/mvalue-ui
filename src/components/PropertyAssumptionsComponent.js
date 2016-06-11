'use strict';

import React from "react";
import {Row, Col} from "react-bootstrap";
import {FormComponent, MoneyField, PercentageField} from "./FormComponent";
import {formatAsPercent} from "../util/Util";
import * as _ from "lodash";

class PropertyAssumptionsComponent extends FormComponent {

  render() {

    const {
      rent,
      cumulativeAppreciation,
      rentalIncrease,
      investmentHorizonInYrs,
      commonCharges,
      propertyTax,
      buyingClosingCost,
      sellingClosingCost
    } = _.assign({}, this.props, this.state);

    const yearlyAppreciation = Math.pow((1 + cumulativeAppreciation), (1 / investmentHorizonInYrs)) - 1;

    return (
      <div className='incomeassumptions-component'>
        <Row>
          <Col md={12}>
            <h4>Property Assumption</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h5>General Assumptions</h5>
            <MoneyField floatingLabelText='Buying Closing Cost'
                        initialValue={buyingClosingCost}
                        onChange={v => this.updateState('buyingClosingCost', v)}/>
            <MoneyField floatingLabelText='Selling Closing Cost'
                        initialValue={sellingClosingCost}
                        onChange={v => this.updateState('sellingClosingCost', v)}/>
            <MoneyField floatingLabelText='Investment Horizon (Yrs)'
                        initialValue={investmentHorizonInYrs}
                        onChange={v => this.updateState('investmentHorizonInYrs', v)}/>
            <PercentageField floatingLabelText='Total Appreciation'
                             initialValue={cumulativeAppreciation}
                             onChange={v => this.updateState('cumulativeAppreciation', v)}/>
            <div>
              <label>Yearly: {formatAsPercent(yearlyAppreciation)}</label>
            </div>
          </Col>
          <Col md={6}>
            <h5>Monthly</h5>
            <MoneyField floatingLabelText='Rent'
              isRequired={true}
              initialValue={rent}
              onChange={v => this.updateState('rent', v)}/>
            <PercentageField floatingLabelText='Rental Increase'
              initialValue={rentalIncrease}
              onChange={v => this.updateState('rentalIncrease', v)}/>
            <MoneyField floatingLabelText='Common Charges'
              initialValue={commonCharges}
              onChange={v => this.updateState('commonCharges', v)}/>
            <MoneyField floatingLabelText='Property Taxes'
              initialValue={propertyTax}
              onChange={v => this.updateState('propertyTax', v)}/>
          </Col>
        </Row>
        <br/>
      </div>
    );
  }

}

PropertyAssumptionsComponent.displayName = 'IncomeAssumptionsComponent';

// Uncomment properties you need
PropertyAssumptionsComponent.propTypes = {
  investmentHorizonInYrs: React.PropTypes.number,
  rentalIncrease: React.PropTypes.number,
  cumulativeAppreciation: React.PropTypes.number,
  commonCharges: React.PropTypes.number,
  buyingClosingCost: React.PropTypes.number,
  sellingClosingCost: React.PropTypes.number,
  rent: React.PropTypes.number,
  propertyTax: React.PropTypes.number
};

PropertyAssumptionsComponent.defaultProps = {
  investmentHorizonInYrs: 10,
  rentalIncrease: 0.025,
  cumulativeAppreciation: 0.2,
  commonCharges: 418,
  buyingClosingCost: 32000,
  sellingClosingCost: 48000,
  rent: 2300,
  propertyTax: 250
};

export default PropertyAssumptionsComponent;
