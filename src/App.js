import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import RootScreen from "./RootScreen";
import ComponentStateScreen from "./ComponentStateScreen";
import RenderPropsScreen from "./RenderPropsScreen";

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
        </Switch>
      </BrowserRouter>
    );
  }
}
