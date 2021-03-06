import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import RootScreen from "./RootScreen";
import ComponentStateScreen from "./ComponentStateScreen";
import RenderPropsScreen from "./RenderPropsScreen";
import StaleProblemScreen from "./StaleProblemScreen";
import ContextScreen from "./ContextScreen";
import SummaryScreen from "./SummaryScreen";

export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={RootScreen} />
          <Route
            exact={true}
            path="/componentstate"
            component={ComponentStateScreen}
          />
          <Route
            exact={true}
            path="/renderprops"
            component={RenderPropsScreen}
          />
          <Route
            exact={true}
            path="/staleproblem"
            component={StaleProblemScreen}
          />
          <Route exact={true} path="/context" component={ContextScreen} />
          <Route exact={true} path="/summary" component={SummaryScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}
