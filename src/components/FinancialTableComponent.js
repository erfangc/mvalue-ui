'use strict';

import React from "react";
import ReactDataGrid from "react-data-grid/addons";
import * as _ from "lodash";
import {formatAsMoney} from "../util/Util";
require('react-data-grid/themes/react-data-grid.css');

class LabelFormatter extends React.Component {
  render() {
    return <strong>{this.props.value}</strong>;
  }
}

class MoneyFormatter extends React.Component {
  render() {
    const value = this.props.value;
    return <span>{value !== 0 && !isNaN(value) ? formatAsMoney(value, 0) : ''}</span>;
  }
}

/**
 * Component that wraps ReactDataGrid to display financial statement data such as Income statement or Cashflow statement
 * Columns of this table shall represent data from a specific period whereas rows represent a specific financial statement attribute
 * such as 'rent' or 'total expense'
 * These financial statement attributes are defined by the prop `rowLabels`
 */
class FinancialTableComponent extends React.Component {

  render() {
    const styles = {
      loading: {
        'textAlign': 'center'
      }
    };
    const {isLoading, data} = this.props;
    if (isLoading)
      return <div style={styles.loading}>Loading ... </div>;
    else if (!data || data.length === 0)
      return <div style={styles.loading}>Click Submit to Perform an Analysis</div>;
    else
      return this.renderTable();
  }

  renderTable() {

    const {data, rowLabels} = this.props;

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
      const {label, name, isBlank} = rowLabels[i];
      // generate a row based on every element in `data` which represents the columns
      const rowData = data.map(datum => [datum['period'], isBlank ? 0 : datum[label]]
      );
      return _.assign({}, _.fromPairs(rowData), {key: i, label: name});
    }

    return (
      <div>
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

FinancialTableComponent.displayName = 'FinancialTableComponent';

export default FinancialTableComponent;
