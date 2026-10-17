import { useParams, Navigate } from "react-router";

/* Layout */
import { Article } from "@/components/Layouts/";

/* API */
import { getPost } from "@/utils";
import { getPostContent } from "@/utils/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }
  
  const post = getPost(slug);
  const Content = getPostContent(slug);

  if (!post || !Content) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Article title={post.data.title}>
      <div className="prose prose-invert"><Content /></div>
    </Article>
  );
};

export default BlogPost;
