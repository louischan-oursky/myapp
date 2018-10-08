import * as React from "react";
import InputRow from "./InputRow";

export default function StatelessForm(props) {
  const {
    className,
    firstName,
    lastName,
    readOnly,
    onChangeFirstName,
    onChangeLastName
  } = props;
  return (
    <form className={className}>
      <InputRow
        readOnly={readOnly}
        value={firstName}
        placeholder="First Name"
        onChange={onChangeFirstName}
      />
      <InputRow
        readOnly={readOnly}
        value={lastName}
        placeholder="Last Name"
        onChange={onChangeLastName}
      />
    </form>
  );
}
