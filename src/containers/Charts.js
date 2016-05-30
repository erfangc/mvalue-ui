import {connect} from "react-redux";
import ReactHighcharts from "react-highcharts";
import * as _ from "lodash";
import {formatAsMoney} from "../util/Util";
ReactHighcharts.Highcharts.theme = {
  colors: ['#2196F3', '#1A237E', '#311B92']
};

ReactHighcharts.Highcharts.setOptions(ReactHighcharts.Highcharts.theme);

const commonChartConfig = {
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
    borderWidth: 0,
    formatter: function () {
      return `<strong>Period ${this.x}</strong><br/>${this.series.name} ${formatAsMoney(this.y, 0)}`;
    }
  }
};

const columnChartConfig = _.assign({}, commonChartConfig, {
  chart: {
    type: 'column'
  }
});

const areaChartConfig = _.assign({}, commonChartConfig, {
  chart: {
    type: 'area'
  },
  plotOptions: {
    area: {
      stacking: 'normal'
    }
  }
});

function stpNetCashflowChart(state) {
  const {cashflowStatements} = state;
  const series = [
    {
      name: 'Net CF',
      data: cashflowStatements.map((stmt) => stmt.netCF)
    }
  ];
  return {
    config: _.assign(
      {},
      columnChartConfig,
      {
        title: {text: 'Net Cashflow'},
        yAxis: {title: {text: 'Cashflow in $'}},
        series: series
      })
  };
}
export var NetCashflowChart = connect(stpNetCashflowChart)(ReactHighcharts);

function stpMortgagePmtChart(state) {
  const {mtgPmtTable} = state;
  const series = [
    {
      name: 'Interest',
      data: mtgPmtTable.map((mtgState) => mtgState.interestExpense)
    },
    {
      name: 'Principal',
      data: mtgPmtTable.map((mtgState) => mtgState.principal)
    }
  ];
  return {
    config: _.assign(
      {},
      areaChartConfig,
      {
        title: {text: 'Mortgage Payment - Principal vs. Interest'},
        yAxis: {title: {text: 'Cashflow in $'}},
        series: series
      })
  };
}
export var MortgagePmtChart = connect(stpMortgagePmtChart)(ReactHighcharts);
