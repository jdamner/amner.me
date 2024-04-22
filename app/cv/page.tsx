import React from "react";

import Service from "@/content/services.mdx";
import Profile from "@/content/cv/profile.mdx";
import type { Metadata } from "next";
import { Header, Tabs, Timeline } from "../../components";
import { TwoThirds, Article, Container } from "../../components/Layouts";

import Title from "../../components/Atoms/Title";
import ButtonLink from "../../components/Atoms/Links/ButtonLink";
import InlineLink from "../../components/Atoms/Links/Inline";

/* Content */

import {
  useAllEducation,
  useAllEmployment,
  getAllProjects,
  useAllReferences,
  useAllServices,
} from "../../utils";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "James Amner's Curriculum Vitae (Resume)",
};

export default async function CV() {
  const employment = await useAllEmployment();
  const education = await useAllEducation();
  const projects = await getAllProjects();
  const references = await useAllReferences();
  const services = await useAllServices();

  return (
    <>
      <Header title="Curriculum Vitae" />
      <Article offset image="/me.jpg">
        <div className="prose mr-auto px-3 md:px-0 prose-slate dark:prose-invert">
          <Profile />
        </div>
      </Article>
      <Container alt>
        <Title title="Employment History" />
        <TwoThirds>
          <Timeline events={employment} />
        </TwoThirds>
      </Container>

      <Container>
        <Tabs
          title={<Title title="Key Skills">Web Development</Title>}
          tabs={services}
          defaultContent={<Service />}
        />
      </Container>

      <Container alt>
        <Title title="Projects" />
        <TwoThirds>
          {projects.map((item) => (
            <div className="mb-3" key={item.slug}>
              <Title>{item.data.title}</Title>
              <div className="prose prose-slate dark:prose-invert my-5">
                {item.content}
              </div>
              <ButtonLink href={item.data.link} target="_blank">
                Find out more
              </ButtonLink>
            </div>
          ))}
        </TwoThirds>
      </Container>

      <Container>
        <Title title="Education" />
        <TwoThirds>
          {education.map((item) => (
            <div className="my-3 pb-1" key={item.slug}>
              <div className="mb-1">
                <Title>{item.data.title}</Title>
                <span className="text-sm text-slate-700 dark:text-slate-500">
                  {item.data.date}
                </span>
              </div>
              <div className="prose prose-slate dark:prose-invert">
                {item.content}
              </div>
            </div>
          ))}
        </TwoThirds>
      </Container>

      <Container alt>
        <Title title="References" />
        <TwoThirds>
          {references.map((item) => (
            <div className="my-3 pb-1" key={item.slug}>
              <div className="mb-1">
                <Title>{item.data.title}</Title>
              </div>
              <div className="prose prose-slate dark:prose-invert">
                <ul>
                  <li>{item.content}</li>
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
            </div>
          ))}
        </TwoThirds>
      </Container>
    </>
  );
}
