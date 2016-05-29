require('normalize.css/normalize.css');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IncomeStatementTable from '../containers/IncomeStatementTable';
import Assumptions from '../containers/Assumptions';
import {Grid, Row, Col} from 'react-bootstrap';
import Divider from 'material-ui/Divider';

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title='mValue'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
        <Divider inset={true}/>
        <Grid>
          <Row>
            <Col md={12}>
              <Assumptions/>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <IncomeStatementTable/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

MainComponent.defaultProps = {};

export default MainComponent;
