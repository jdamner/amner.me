import React from "react";

import { Article } from "../../components/Layouts";
import Content from "./content.mdx";

const Page = () => (
  <>
    <Article title="Privacy Policy">
      <div className="prose prose-invert">
        <Content />
      </div>
    </Article>
  </>
);

export default Page;
