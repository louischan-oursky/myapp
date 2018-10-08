import * as React from "react";
import MainLayout from "./MainLayout";
import InputRow from "./InputRow";

const { Provider, Consumer } = React.createContext();

class C extends React.PureComponent {
  render() {
    const { children } = this.props;
    return children({});
  }
}

class StaleProblem extends React.PureComponent {
  state = {
    lastName: ""
  };

  onChangeLastName = e => {
    const value = e.currentTarget.value;
    this.setState({
      lastName: value
    });
  };

  renderWithContextValue = contextValue => {
    return (
      <InputRow
        placeholder="Last Name"
        value={contextValue.lastName}
        onChange={this.onChangeLastName}
      />
    );
  };

  renderLastName = () => {
    return <Consumer>{this.renderWithContextValue}</Consumer>;
  };

  render() {
    return (
      <Provider value={this.state}>
        <C>{this.renderLastName}</C>
      </Provider>
    );
  }
}

export default class ContextScreen extends React.PureComponent {
  render() {
    return (
      <MainLayout>
        <h1>Context</h1>
        <p>
          The Context API introduced in React 16.3 is no longer affected by
          componentShouldUpdate
        </p>
        <p>Advantages of Context</p>
        <ul>
          <li>All advantages of Render Props</li>
          <li>Without the disadvantages of Render Props</li>
          <li>Share data with indirect children</li>
        </ul>
        <StaleProblem />
      </MainLayout>
    );
  }
}
