import * as React from "react";
import MainLayout from "./MainLayout";
import InputRow from "./InputRow";

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

  renderLastName = () => {
    return (
      <InputRow
        placeholder="Last Name"
        value={this.state.lastName}
        onChange={this.onChangeLastName}
      />
    );
  };

  render() {
    return <C>{this.renderLastName}</C>;
  }
}

export default class StaleProblemScreen extends React.PureComponent {
  render() {
    return (
      <MainLayout>
        <h1>Stale Problem</h1>
        <StaleProblem />
      </MainLayout>
    );
  }
}
