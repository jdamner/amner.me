/* Layout */
import Layout from "../components/Layout"
import Blog from "../components/Global/Blog"
import Header from "../components/Global/Header"
import ButtonLink from "../components/Links/ButtonLink";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

/* API */
import { getData, getAllPosts, postsDirectory } from "../api/GetData";
import { makeJsonParseable } from "../api/Utils";

/* Types */
import type { post } from "../types/post.type";
type PostPageProps = {
  post: post,
  posts: post[]
}
type PostPageParams = {
  params: {
    slug: string
  }
}


/**
 * Post Page
 * 
 * @param {PostPageProps}
 * @returns {JSX.Element}
 */
export default function Template({ post, posts }: PostPageProps): JSX.Element {
  const date = new Date(post.date);
  return (
    <Layout title={post.title}>
      <Header title={post.title}>
        <p className="hidden">{date.toDateString()}</p>
      </Header>
      <article className='container mx-auto py-5 flex flex-col lg:flex-row'>
        <div className='-mt-20 p-5'>
          <Image 
            className="border-solid border-4 border-slate-900 mb-5 bg-white" 
            src={post.thumbnail} 
            alt={post.title} 
            width={500} 
            height={500} 
            placeholder="blur"
            priority
            />
            <ul className="mb-5 text-sm">
              <li><strong>Author:</strong> James Amner</li>
              <li><strong>Date:</strong> { date.toLocaleDateString( 'en-GB' ) }</li>
            </ul>
          <span className='hidden md:block'>
            <ButtonLink href='/'>« Home</ButtonLink>
          </span>
        </div>
        <div className="col-span-2">
          <ReactMarkdown className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{post.content}</ReactMarkdown>
        </div>
        <span className='block mx-3 my-5 md:hidden'>
          <ButtonLink href='/'>« Home</ButtonLink>
        </span>
      </article>
      <div className='clear-both'></div>
      <Blog posts={posts} />
    </Layout>
  )
}

/**
  * Gets static data for SS Generation
  * 
  * @param {PostPageParams} { params }
  * @returns {Promise<{ props: PostPageProps }>} 
  */
export async function getStaticProps({ params }: PostPageParams): Promise<{ props: PostPageProps }> {
  return {
    props: {
      post: makeJsonParseable(await getData(params.slug, postsDirectory)),
      posts: makeJsonParseable(await getAllPosts()),
    },
  }
}

/**
 * Gets static paths for SS Generation
 * 
 * @returns {Promise<{ paths: PostPageParams[], fallback: boolean }>}
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export async function getStaticPaths(): Promise<{ paths: PostPageParams[], fallback: boolean }> {
  const posts = await getAllPosts()

  return {
    paths: makeJsonParseable(
      posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      })
    ),
    fallback: false,
  }
}
