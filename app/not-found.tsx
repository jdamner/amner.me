import React from "react";

import { Header } from "../components";
import { Container } from "../components/Layouts";

export const metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
};

const NotFound = () => (
  <Header title="Page Not Found">
    <Container />
  </Header>
);

export default NotFound;
