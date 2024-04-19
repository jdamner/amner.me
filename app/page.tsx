import { useAllPosts, useAllServices } from "@/utils";

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

export default async function Page() {
  const services = await useAllServices();
  const posts = await useAllPosts();
  return (
    <>
      <Header title="James Amner" subtitle="Senior PHP Developer">
        <div className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert">
          <Content />
        </div>
      </Header>
      <Container>
        <Tabs
          title={<Title title="Techincal Skills">Web Development</Title>}
          tabs={services}
          defaultContent={<Service />}
        />
      </Container>
      <Container alt>
        <Blog posts={posts} />
      </Container>
    </>
  );
}
