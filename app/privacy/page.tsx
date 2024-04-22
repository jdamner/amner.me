import React from "react";

import { Header } from "../../components";
import { Container, Article } from "../../components/Layouts";
import Content from "./content.mdx";

function Page() {
  return (
    <>
      <Header title="Privacy Policy" />
      <Article offset image="/privacy.jpg">
        <div className="prose text-left mx-auto px-3 md:px-0 prose-slate dark:prose-invert">
          <Content />
        </div>
      </Article>
      <Container alt />
    </>
  );
}

export default Page;
