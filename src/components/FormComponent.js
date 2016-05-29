import React from 'react';
import * as _ from 'lodash';

class FormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  updateState(stateKey, value) {
    const newState = {};
    newState[stateKey] = value;
    this.setState(newState);
  }

  getWithFallback(key) {
    if (this.state[key] !== undefined)
      return this.state[key];
    else
      return this.props[key];
  }

  getStateWithFallback() {
    return _.assign({}, this.props, this.state);
  }

}

export default FormComponent;
