import {connect} from "react-redux";
import FinancialTableComponent from "../components/FinancialTableComponent";

function mapStateToPropsIncomeStatement(state) {
  return {
    isLoading: state.isLoading,
    data: state.incomeStatements,
    rowLabels:  [
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
    ]
  };
}

export var IncomeStatementTable = connect(mapStateToPropsIncomeStatement)(FinancialTableComponent);

function mapStateToPropsCF(state) {
  return {
    isLoading: state.isLoading,
    data: state.cashflowStatements,
    rowLabels: [
      {label: 'rent', name: 'Rent'},
      {label: 'proceedsFromSale', name: 'Proceeds from Sale'},
      {isBlank: true},
      {label: 'tax', name: 'Tax'},
      {label: 'commonCharges', name: 'Common Charges'},
      {label: 'closingCost', name: 'Closing Cost'},
      {label: 'downPayment', name: 'Down Payment'},
      {isBlank: true},
      {label: 'netCF', name: 'Net Cashflow'}
    ]
  };
}

export var CashflowStatementTable = connect(mapStateToPropsCF)(FinancialTableComponent);
