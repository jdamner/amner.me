import Timeline from "../components/Timeline/Timeline";
import Layout from "../components/Layout";
import Header from "../components/Global/Header";
import Image from "next/image";
import ButtonLink from "../components/Links/ButtonLink";
import Container from "../components/Layouts/Container";

import MyImage from "../../public/me.jpg";

import { makeJsonParseable, readMdFile } from "../api/Utils";
import { getAllEducation, getAllEmployment, getAllProjects, getAllReferences, getAllServices } from "../api/GetData";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MdFile } from "../types/MdFile.type";
import Tabs from "../components/Global/Tabs";
import Title from "../components/Global/Title";
import TwoThirds from "../components/Layouts/TwoThirds";
import Article from "../components/Layouts/Article";
import InlineLink from "../components/Links/Inline";

export default function CV(
    { employment, education, projects, references, profile, service, services }:
        {
            employment: MdFile[],
            education: MdFile[],
            projects: MdFile[],
            references: MdFile[],
            profile: MdFile,
            service: MdFile,
            services: MdFile[]
        }
) {
    const serviceTabs = services.map(service => {
        return {
            title: service.data.title,
            content: service.content
        }
    })

    return (
        <Layout title='Curriculum Vitae'>
            <Header title="Curriculum Vitae" />
            <Article offset image={<Image
                className="border-2 border-slate-500 mb-5 bg-white"
                src={MyImage}
                alt={"James Amner"}
                width={500}
                height={500}
                placeholder="blur"
                priority
            />
            }>
                <ReactMarkdown className="prose mr-auto px-3 md:px-0 prose-slate dark:prose-invert">{profile.content}</ReactMarkdown>
            </Article>
            <Container alt>
                <Title title="Employment History"></Title>
                <TwoThirds>
                    <Timeline events={employment} />
                </TwoThirds>
            </Container>

            <Container>
                <Tabs title={<Title title="Key Skills">Web Development</Title>} tabs={serviceTabs} defaultContent={service.content} />
            </Container>

            <Container alt>
                <Title title="Projects"></Title>
                <TwoThirds>
                    {projects.map((item) =>
                        <div className="mb-3" key={item.slug}>
                            <Title>{item.data['title']}</Title>
                            <ReactMarkdown className="prose prose-slate dark:prose-invert my-5">{item.content}</ReactMarkdown>
                            <ButtonLink href={item.data.link}>Find out more</ButtonLink>
                        </div>
                    )}
                </TwoThirds>
            </Container>


            <Container>
                <Title title="Education"></Title>
                <TwoThirds>
                    {education.map((item) =>
                        <div className="my-3 pb-1" key={item.slug}>
                            <div className="mb-1">
                                <Title>{item.data.title}</Title>
                                <span className="text-sm text-slate-700 dark:text-slate-500">{item.data.date}</span>
                            </div>
                            <ReactMarkdown className="prose prose-slate dark:prose-invert">{item.content}</ReactMarkdown>
                        </div>
                    )}
                </TwoThirds>
            </Container>

            <Container alt>
                <Title title='References'></Title>
                <TwoThirds>
                    {references.map((item) =>
                        <div className="my-3 pb-1" key={item.slug}>
                            <div className="mb-1">
                                <Title>
                                  {item.data.title}
                                </Title>
                            </div>
                            <div className="prose prose-slate dark:prose-invert">
                                <ul>
                                    <li>{item.content}</li>
                                    {item.data.website && <li><InlineLink href={item.data.website}>{item.data.website}</InlineLink></li>}
                                    {item.data.phone && <li><InlineLink href={'tel:' + item.data.phone}>{item.data.phone}</InlineLink></li>}
                                    {item.data.email && <li><InlineLink href={'mailto:' + item.data.email}>{item.data.email}</InlineLink></li>}
                                </ul>
                            </div>
                        </div>
                    )}
                </TwoThirds>
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            employment: makeJsonParseable(await getAllEmployment()),
            education: makeJsonParseable(await getAllEducation()),
            projects: makeJsonParseable(await getAllProjects()),
            references: makeJsonParseable(await getAllReferences()),
            profile: makeJsonParseable(await readMdFile('cv/profile.md')),
            service: makeJsonParseable(await readMdFile('services.md')),
            services: makeJsonParseable(await getAllServices()),
        }
    }
}