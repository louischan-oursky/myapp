import * as React from "react";
import MainLayout from "./MainLayout";
import FormState from "./FormState";
import StatelessForm from "./StatelessForm";
import styles from "./RenderPropsScreen.module.scss";

export default class RenderPropsScreen extends React.PureComponent {
  renderWithFormState = renderProps => {
    const {
      firstName,
      lastName,
      onChangeFirstName,
      onChangeLastName
    } = renderProps;
    return (
      <>
        <StatelessForm
          firstName={firstName}
          lastName={lastName}
          readOnly={false}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
        />
        <StatelessForm
          className={styles.readOnlyForm}
          firstName={firstName}
          lastName={lastName}
          readOnly={true}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
        />
      </>
    );
  };

  render() {
    return (
      <MainLayout>
        <h1>Render Props</h1>
        <p>
          Render Props is a technique that receives a ReactElement-returning
          function <br />
          and invoke that function with useful arguments.
        </p>
        <p>Advantages of Render Props</p>
        <ul>
          <li>Code sharing</li>
          <li>Flexible UI</li>
        </ul>
        <p>Disadvantages of Render Props</p>
        <ul>
          <li>
            Very easy to write inline function in JSX that defeats the purpose
            of using PureComponent.
          </li>
          <li>
            Using currying to avoid inline function may lead to a more serious
            problem.
          </li>
        </ul>
        <FormState>{this.renderWithFormState}</FormState>
      </MainLayout>
    );
  }
}
