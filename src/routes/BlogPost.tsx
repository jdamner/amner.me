import { useParams, Navigate } from "react-router-dom";

/* Layout */
import { Article } from "@/components/Layouts/";

/* API */
import { getPost } from "@/utils";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }
  
  const post = getPost(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Article title={post.data.title}>
      <div className="prose prose-invert"><post.content /></div>
    </Article>
  );
};

export default BlogPost;
