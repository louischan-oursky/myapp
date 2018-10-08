import * as React from "react";

export default class FormState extends React.PureComponent {
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
    const { children } = this.props;
    const { firstName, lastName } = this.state;
    return children({
      firstName,
      lastName,
      onChangeFirstName: this.onChangeFirstName,
      onChangeLastName: this.onChangeLastName
    });
  }
}
