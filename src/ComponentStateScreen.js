import * as React from "react";
import MainLayout from "./MainLayout";
import StatefulForm from "./StatefulForm";

export default function ComponentStateScreen() {
  return (
    <MainLayout>
      <h1>Component State a.k.a. Local State</h1>
      <p>Advantages of Component State</p>
      <ul>
        <li>Easiest to reason about</li>
        <li>Automatic cleanup</li>
      </ul>
      <StatefulForm />
    </MainLayout>
  );
}
