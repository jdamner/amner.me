import { getAllPostLinks, useAllServices } from "@/utils";

import Content from "@/content/home.mdx";
import Service from "@/content/services.mdx";

/* Layout/Visual Component */
import { Blog, Tabs, Header } from "@/components";
import { Container } from "@/components/Layouts/";
import Title from "@/components/Atoms/Title";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "James Amner's personal website",
};

const Page = () => {
  const services = useAllServices();
  const posts = getAllPostLinks();
  return (
    <>
      <Header title="Hi, I'm a software developer.">
        <div className="prose prose-invert">
          <Content />
        </div>
      </Header>
      <div className="bg-orange-600 lg:bg-gradient-to-r from-orange-600 from-50% to-50% to-orange-100 text-black px-3">
        <Container>
          <Tabs
            title={<Title>Technical Skills</Title>}
            tabs={services}
            defaultContent={<Service />}
          />
        </Container>
      </div>
      <div className="mb-5 px-3">
        <Container>
          <Blog posts={posts} />
        </Container>
      </div>
    </>
  );
};

export default Page;
