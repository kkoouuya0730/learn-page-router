import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";
import LoginForm from "@/features/login/LoginForm";

export default function Login() {
  return (
    <>
      <CustomHeading tag="h1" className="mb-2">
        ログイン
      </CustomHeading>
      <LoginForm />
    </>
  );
}

Login.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};