import * as React from "react";
import InputRow from "./InputRow";

export default class StatefulForm extends React.PureComponent {
  state = {
    firstName: "",
    lastName: ""
  };

  onChangeFirstName = e => {
    const value = e.currentTarget.value;
    this.setState({
      firstName: value
    });
  };

  onChangeLastName = e => {
    const value = e.currentTarget.value;
    this.setState({
      lastName: value
    });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <form>
        <InputRow
          value={firstName}
          placeholder="First Name"
          onChange={this.onChangeFirstName}
        />
        <InputRow
          value={lastName}
          placeholder="Last Name"
          onChange={this.onChangeLastName}
        />
      </form>
    );
  }
}
