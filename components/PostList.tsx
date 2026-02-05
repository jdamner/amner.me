import React from "react";

/* Components */
import Title from "./Atoms/Title";
import ButtonLink from "./Atoms/Links/ButtonLink";

export default function PostList(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { posts: { slug: string; title: string }[] },
) {
  const { posts, ...rest } = props;
  return (
    <div {...rest}>
      <Title>Blog Posts</Title>
      <ul>
        {posts &&
          posts.map((post, index) => (
            <li key={index} className="mb-1">
              <ButtonLink to={post.slug} key={index}>
                {post.title}
              </ButtonLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
