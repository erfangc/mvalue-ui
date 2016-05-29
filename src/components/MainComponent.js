require('normalize.css/normalize.css');

import React from "react";
import AppBar from "material-ui/AppBar";
import {IncomeStatementTable, CashflowStatementTable} from "../containers/FinancialTable";
import {NetCashflowChart, MortgagePmtChart} from "../containers/Charts.js";
import Assumptions from "../containers/Assumptions";
import {Grid, Row} from "react-bootstrap";
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from "material-ui/Tabs";

/**
 * The master orchestrator component that lays out the App
 * from title bar to result tables
 */
class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title='mValue'
        />
        <Grid>
          <Row>
            <Assumptions/>
          </Row>
          <Row>
            <br/>
            <Divider/>
            <br/>
            <strong>IRR</strong> {`${(this.props.irr * 100).toFixed(2)}%`}
            <Tabs>
              <Tab label="Income Statements">
                <IncomeStatementTable/>
              </Tab>
              <Tab label="Cashflow Statements">
                <CashflowStatementTable/>
              </Tab>
              <Tab label="Mortgage Payments">
                <MortgagePmtChart/>
              </Tab>
              <Tab label="Visualization">
                <NetCashflowChart/>
              </Tab>
            </Tabs>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MainComponent;
