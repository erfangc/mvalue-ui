import React from 'react';
import * as _ from 'lodash';
import {TextField} from 'material-ui';

class ValidatedFormField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
      errorText: ''
    }
  }

  onChange(e) {
    throw 'Not implemented, please use a child component';
  }

  render() {
    const {floatingLabelText} = this.props;
    const {value, errorText} = this.state;
    return <TextField floatingLabelText={floatingLabelText}
                      value={value}
                      errorText={errorText}
                      onChange={e=>this.onChange(e)}/>
  }

}

export class PercentageField extends ValidatedFormField {
  /**
   * validates value held in `e`, if valid invoke the onChange on props passing the validated value
   * @param e
   */
  onChange(e) {

    function isNumber(v) {
      const n = v.endsWith('%') ? v.substr(0, v.length - 1) : v;
      return !isNaN(n);
    }

    function extract(v) {
      return v.endsWith('%') ? parseFloat(v) / 100 : parseFloat(v);
    }

    const value = e.target.value;
    const {onChange, isRequired} = this.props;
    if (!value && isRequired)
      this.setState({
        value: value,
        errorText: 'This field is required'
      });
    else if (isNumber(value))
      this.setState({
        value: value,
        errorText: ''
      }, () => onChange(extract(value)));

    else {
      this.setState({
        value: value,
        errorText: 'Please enter a valid percentage'
      });
    }
  }
}

export class MoneyField extends ValidatedFormField {
  /**
   * validates value held in `e`, if valid invoke the onChange on props passing the validated value
   * @param e
   */
  onChange(e) {
    const value = e.target.value;
    const {onChange, isRequired} = this.props;
    if (!value && isRequired)
      this.setState({
        value: value,
        errorText: 'This field is required'
      });
    // credit: http://stackoverflow.com/questions/11799539/regex-for-money-values-in-javascript
    else if (value.search(/^\$?\d+(,\d{3})*(\.\d*)?$/) >= 0) {
      this.setState({
        value: value,
        errorText: ''
      }, () => onChange(Number(value.replace(/[\$,]/g, ''))));
    }
    else {
      this.setState({
        value: value,
        errorText: 'Please enter a valid monetary amount'
      });
    }
  }
}

/**
 * base class for form-like components with multiple inputs
 */
export class FormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  updateState(stateKey, value) {
    const next = {};
    next[stateKey] = value;
    this.setState(next);
  }

  getFormValuesAsObject() {
    return _.assign({}, this.props, this.state);
  }

}
