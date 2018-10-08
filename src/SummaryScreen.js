import * as React from "react";
import MainLayout from "./MainLayout";

export default class SummaryScreen extends React.PureComponent {
  render() {
    return (
      <MainLayout>
        <h1>Summary</h1>
        <p>Use the least powerful tool to achieve your goal.</p>
        <p>Start with Component State first.</p>
        <p>If you need to lift state up, consider Render Props.</p>
        <p>
          If you access state in the children of Render Props, you may encounter
          the Stale problem and you may need Context.
        </p>
        <p>Use Context when you need to share state to indirect children.</p>
      </MainLayout>
    );
  }
}
