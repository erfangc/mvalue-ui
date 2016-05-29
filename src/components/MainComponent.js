require('normalize.css/normalize.css');

import React from "react";
import AppBar from "material-ui/AppBar";
import {IncomeStatementTable, CashflowStatementTable} from "../containers/FinancialTable";
import Assumptions from "../containers/Assumptions";
import {Grid, Row, Col} from "react-bootstrap";
import {Tabs, Tab} from "material-ui/Tabs";

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title='mValue'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
        <Grid>
          <Row>
            <Col>
              <Assumptions/>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>IRR</strong> {`${(this.props.irr * 100).toFixed(2)}%`}
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs>
                <Tab label="Income Statements">
                  <IncomeStatementTable />
                </Tab>
                <Tab label="Cashflow Statements">
                  <CashflowStatementTable />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MainComponent;
