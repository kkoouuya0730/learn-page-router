import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";
import { Blog } from "@/types/blog";
import { BlogListItem } from "./parts/BlogListItem";

type Props = {
  data: {
    blogs: Blog[];
  };
};
export default function BlogPage({ data }: Props) {
  return (
    <>
      <div className="mb-6">
        <CustomHeading tag="h1">最新の記事</CustomHeading>
      </div>
      <div className="grid lg:grid lg:grid-cols-2 gap-4">
        {data.blogs.map((blog) => (
          <BlogListItem blog={blog} key={blog.title} />
        ))}
      </div>
    </>
  );
}

BlogPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/blogs"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error("Fetch error:", error);
    return { props: { data: null } };
  }
}
