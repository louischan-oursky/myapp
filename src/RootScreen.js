import * as React from "react";
import MainLayout from "./MainLayout";

export default function RootScreen() {
  return (
    <MainLayout>
      <h1>State Management in React</h1>
      <p>
        We are going to introduce several kinds of state management techniques
        WITHOUT Redux.
      </p>
    </MainLayout>
  );
}
