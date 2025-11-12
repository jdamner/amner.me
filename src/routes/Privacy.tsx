
import { Article } from "@/components/Layouts";
import Content from "@/content/privacy.mdx";

const Privacy = () => (
  <>
    <Article title="Privacy Policy">
      <div className="prose prose-invert">
        <Content />
      </div>
    </Article>
  </>
);

export default Privacy;
