import { useRouter } from "next/router";
const Name = () => {
  // path nameをフィルタリングみたいなことができる？
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      商品{router.query.name}の{router.query.color}
      ページです
    </div>
  );
};

export default Name;
