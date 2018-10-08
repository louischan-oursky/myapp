import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import RootScreen from "./RootScreen";

export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={RootScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}
