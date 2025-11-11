/* Layout */
import PostList from "./PostList";
/* Types */
import ContactDetails from "./ContactDetails";

export default function Blog({
  posts,
}: {
  posts: { slug: string; title: string }[];
}) {
  return (
    <div className="lg:grid lg:grid-cols-3">
      <PostList posts={posts} className="mt-5 col-span-1" />
      <ContactDetails />
    </div>
  );
}
