import Service from "@/content/services.mdx";
import Profile from "@/content/cv/profile.mdx";

import { Tabs, Timeline } from "@/components";
import { TwoThirds, Article, Container } from "@/components/Layouts";
import Title from "@/components/Atoms/Title";
import ButtonLink from "@/components/Atoms/Links/ButtonLink";
import InlineLink from "@/components/Atoms/Links/Inline";

/* Content */
import {
  useAllEducation,
  useAllEmployment,
  getAllProjects,
  useAllReferences,
  useAllServices,
} from "@/utils";
import { font } from "@/utils/header-font";

const CV = () => {
  const employment = useAllEmployment();
  const education = useAllEducation();
  const projects = getAllProjects();
  const references = useAllReferences();
  const services = useAllServices();

  return (
    <>
      <Article title="Curriculum Vitae">
        <div className="prose mr-auto md:px-0 prose-invert">
          <Profile />
        </div>
      </Article>

      <hr className="bg-orange-600 h-2 mb-5 border-none" />

      <Container className="px-3">
        <Title>Employment History</Title>
        <TwoThirds>
          <Timeline events={employment} />
        </TwoThirds>
      </Container>

      <div className="bg-orange-600 text-black my-5 py-3">
        <Container>
          <Tabs
            title={<Title>Technical Skills</Title>}
            tabs={services}
            defaultContent={<Service />}
          />
        </Container>
      </div>

      <Container className="px-3">
        <Title>Projects</Title>
        <TwoThirds>
          {projects.map((item) => (
            <div className="mb-3" key={item.slug}>
              <h3
                className="text-4xl tracking-tight uppercase"
                style={font.style}
              >
                {item.data.title}
              </h3>
              <div className="prose my-5"><item.content /></div>
              <ButtonLink href={item.data.link} target="_blank">
                Find out more
              </ButtonLink>
            </div>
          ))}
        </TwoThirds>
      </Container>

      <div className="bg-orange-600 my-5 py-5 px-3">
        <Container>
          <Title>Education</Title>
          <TwoThirds>
            {education.map((item) => (
              <div className="my-3 pb-1" key={item.slug}>
                <div className="mb-1">
                  <h3
                    className="text-4xl tracking-tight uppercase"
                    style={font.style}
                  >
                    {item.data.title}
                  </h3>
                  <span className="text-sm">{item.data.date}</span>
                </div>
                <div className="prose"><item.content /></div>
              </div>
            ))}
          </TwoThirds>
        </Container>
      </div>

      <Container className="px-3">
        <Title>References</Title>
        <TwoThirds>
          {references.map((item) => (
            <div className="my-3 pb-1" key={item.slug}>
              <div className="mb-1">
                <h3
                  className="text-4xl tracking-tight uppercase"
                  style={font.style}
                >
                  {item.data.title}
                </h3>
              </div>
              <ul>
                <li><item.content /></li>
                {item.data.website && (
                  <li>
                    <InlineLink href={item.data.website}>
                      {item.data.website}
                    </InlineLink>
                  </li>
                )}
                {item.data.phone && (
                  <li>
                    <InlineLink href={`tel:${item.data.phone}`}>
                      {item.data.phone}
                    </InlineLink>
                  </li>
                )}
                {item.data.email && (
                  <li>
                    <InlineLink href={`mailto:${item.data.email}`}>
                      {item.data.email}
                    </InlineLink>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </TwoThirds>
      </Container>
    </>
  );
};

export default CV;
