import { getAllPosts, getAllServices } from "../data";
import { makeJsonParseable, readMdFile } from "../utils";

/* External Deps */
import ReactMarkdown from 'react-markdown';

/* Layout/Visual Component */
import Blog from "../components/Global/Blog"
import Tabs from "../components/Global/Tabs";
import Header from "../components/Global/Header";
import Container from "../components/Layouts/Container";
import Title from "../components/Global/Title";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'James Amner\'s personal website'
}

const getHomePageProps = (async () => {
    return {
        services: makeJsonParseable(await getAllServices()),
        page: makeJsonParseable(await readMdFile('index.md')),
        service: makeJsonParseable(await readMdFile('services.md')),
        posts: makeJsonParseable(await getAllPosts()).map(post => {
            return {
                title: post.title,
                thumbnail: post.thumbnail,
                slug: post.slug ?? ''
            }
        }),
    }
})

export default async function Page() {
    const { services, page, service, posts } = await getHomePageProps()
    const serviceTabs = services.map(service => {
        return {
            title: service.data.title,
            content: service.content
        }
    })
    return (
        <>
            <Header title='James Amner' subtitle='Senior PHP Developer'>
                <ReactMarkdown className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{page.content}</ReactMarkdown>
            </Header>
            <Container>
                <Tabs title={<Title title={'Techincal Skills'}>Web Development</Title>} tabs={serviceTabs} defaultContent={service.content} />
            </Container>
            <Container alt>
                <Blog posts={posts} />
            </Container>
        </>
    )
}