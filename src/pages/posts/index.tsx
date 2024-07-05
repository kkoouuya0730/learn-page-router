"use client"

import Link from "next/link";
import useSWR from "swr";
// import { usePostStore } from "@/pages/store";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

export default function Index() {
  // const posts = usePostStore((state) => state.posts);
  // const fetchPost = usePostStore(
  //   (state) => state.fetchPost
  // );
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1 className="text-3xl">POST一覧</h1>
      {/* <button onClick={fetchPost}>Fetch Post</button> */}
      <ul>
        {data.map((post: any) => {
          return (
            <li key={post.id}>
              <Link
                href={{
                  pathname: `/posts/${post.id}`,
                  query: { data: JSON.stringify(post) },
                }}
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
