import { Params, useLoaderData } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import BlogDetail from "../screens/BlogDetail";
import { BLOGPOST } from "../utils/formatDate";

const BlogDetailPage = () => {
  const data = useLoaderData();
  return (
    <Wrapper title={data.title} bgSrc={data.src} key={data.title}>
      <BlogDetail data={data} />
    </Wrapper>
  );
};

export const blogLoader = ({ params }: { params: Params<string> }) => {
  const replacedParams = params.blogId || "";
  const originalParams = replacedParams.replace(/-/g, " ");
  const blogDetail = BLOGPOST.find(
    (item) => item.title.toLowerCase() === originalParams.toLowerCase()
  );

  if (!blogDetail) {
    throw new Response("Gallery not found", { status: 404 });
  }

  return blogDetail;
};
export default BlogDetailPage;
