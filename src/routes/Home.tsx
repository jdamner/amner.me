import { getAllPostLinks, useAllServices } from "@/utils";

import Content from "@/content/home.mdx";

/* Layout/Visual Component */
import { Blog, Tabs, Header, } from "@/components";
import { Container } from "@/components/Layouts/";
import { ServicePointer } from "@/components/ServicePointer";
import Title from "@/components/Atoms/Title";

const Home = () => {
  const services = useAllServices();
  const posts = getAllPostLinks();
  
  return (
    <>
      <Header title="Hi, I'm a software developer.">
        <div className="prose prose-invert">
          <Content />
        </div>
      </Header>
      <div className="bg-orange-600 lg:bg-linear-to-r from-orange-600 from-50% to-50% to-orange-100 text-black px-3">
        <Container>
          <Tabs
            title={<Title>Skills</Title>}
            tabs={services}
            defaultContent={<ServicePointer />}
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

export default Home;
