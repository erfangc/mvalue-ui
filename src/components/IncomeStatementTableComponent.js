'use strict';

import React from 'react';
import ReactDataGrid from 'react-data-grid/addons';
import * as _ from 'lodash';
import {formatMoney} from '../util/Util';
require('react-data-grid/themes/react-data-grid.css');

class LabelFormatter extends React.Component {
  render() {
    return <strong>{this.props.value}</strong>;
  }
}

class MoneyFormatter extends React.Component {
  render() {
    return <span>{formatMoney(this.props.value)}</span>;
  }
}

class IncomeStatementTableComponent extends React.Component {

  render() {
    const {isLoading, data} = this.props;
    if (isLoading)
      return <div>Loading ... </div>;
    else if (!data || data.length === 0)
      return <div>Click Submit!</div>;
    else
      return this.renderTable();
  }

  renderTable() {

    const {data} = this.props;
    const rowLabels = [
      {label: 'rent', name: 'Rent'},
      {label: 'totalRevenue', name: 'Total Revenue'},
      {isBlank: true},
      {label: 'commonCharges', name: 'Common Charges'},
      {label: 'interestExpense', name: 'Interest Expense'},
      {label: 'tax', name: 'Tax'},
      {label: 'closingCost', name: 'Closing Cost'},
      {label: 'proceedsFromSale', name: 'Proceeds from Sale'},
      {label: 'totalExponses', name: 'Total Expenses'},
      {isBlank: true},
      {label: 'netIncome', name: 'Net Income'}
    ];

    const columns = data.map(datum=> {
      return {
        formatter: MoneyFormatter,
        key: datum['period'],
        width: 100,
        name: `Year ${datum['period']}`,
        resizable: true
      }
    });

    columns.unshift({
      key: 'label',
      name: '',
      width: 200,
      resizable: true,
      locked: true,
      formatter: LabelFormatter
    });

    function rowGetter(i) {
      const {label, name} = rowLabels[i];
      // generate a row based on every element in `data` which represents the columns
      const rowData = data.map(datum=> {
        return [datum['period'], datum[label]];
      });
      return _.assign({}, _.fromPairs(rowData), {key: i, label: name});
    }

    return (
      <div>
        <h4>Income Statement</h4>
        <ReactDataGrid
          columns={columns}
          rowGetter={rowGetter}
          rowsCount={rowLabels.length}
          minHeight={500}
        />
      </div>
    );
  }

}

IncomeStatementTableComponent.displayName = 'IncomeStatementTableComponent';

// Uncomment properties you need
// MtgPaymentTableComponent.propTypes = {};
// MtgPaymentTableComponent.defaultProps = {};

export default IncomeStatementTableComponent;
