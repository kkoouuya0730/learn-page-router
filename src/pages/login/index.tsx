import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";
import LoginForm from "./parts/LoginForm";

export default function Login() {
  return (
    <>
      <div className="text-center">
        <CustomHeading tag="h1" className="mb-2">
          ログイン
        </CustomHeading>
      </div>
      <LoginForm />
    </>
  );
}

Login.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
