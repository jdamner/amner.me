import React from "react";

import { Header } from "../components";
import { Container } from "../components/Layouts";

export const metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
};

export default function NotFound() {
  return (
    <Header title="Page Not Found">
      <Container />
    </Header>
  );
}
