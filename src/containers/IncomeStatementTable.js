import {connect} from 'react-redux';
import IncomeStatementTableComponent from '../components/IncomeStatementTableComponent';

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    data: state.data
  };
}

export default connect(mapStateToProps)(IncomeStatementTableComponent);
