import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { data } = router.query;
  // const obj = data
  //   ? JSON.parse(data as string)
  //   : { id: "test", title: "test", body: "test" };
  return (
    // <>
    //   <h1>POST(投稿){obj.id}</h1>
    //   <h2>{obj.title}</h2>
    //   <p>{obj.body}</p>
    // </>
    <ul>
      <li>id:{" " + router.query.id}</li>
      <li>name:{" " + router.query.name}</li>
    </ul>
  );
}

export async function getServerSideProps({ params }: any) {
  const id = params.post;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await res.json();
  return { props: { post } };
}

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts`
//   );
//   const posts = await res.json();
//   const paths = posts.map(
//     (post: any) => `/posts/${post.id}`
//   );
//   return {
//     paths,
//     fallback: false,
//   };
// }
