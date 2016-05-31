require('normalize.css/normalize.css');

import React from "react";
import AppBar from "material-ui/AppBar";
import {IncomeStatementTable, CashflowStatementTable} from "../containers/FinancialTable";
import {NetCashflowChart, MortgagePmtChart} from "../containers/Charts.js";
import Assumptions from "../containers/Assumptions";
import {Grid, Row, Col} from "react-bootstrap";
import Divider from "material-ui/Divider";
import {Tabs, Tab} from "material-ui/Tabs";
import MediaQuery from "react-responsive";

/**
 * The master orchestrator component that lays out the App
 * from title bar to result tables
 */
class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <AppBar title='Mortgage Value - Property Investment Modeling'/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <AppBar title='Mortgage Value'/>
        </MediaQuery>
        <Grid>
          <Row>
            <Col sm={12}>
              <Assumptions/>
            </Col>
          </Row>
          <Row>
            <br/>
            <Divider/>
            <br/>
          </Row>
          <Row>
            <Col md={12}>
              <strong>IRR</strong> {`${(this.props.irr * 100).toFixed(2)}%`}
              <MediaQuery minDeviceWidth={1224}>
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
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1224}>
                <Tabs>
                  <Tab label="IS">
                    <IncomeStatementTable/>
                  </Tab>
                  <Tab label="CF">
                    <CashflowStatementTable/>
                  </Tab>
                  <Tab label="Mtg">
                    <MortgagePmtChart/>
                  </Tab>
                  <Tab label="Visual">
                    <NetCashflowChart/>
                  </Tab>
                </Tabs>
              </MediaQuery>
            </Col>
          </Row>
        </Grid>
        <br/>
        <br/>
      </div>
    );
  }
}

export default MainComponent;
