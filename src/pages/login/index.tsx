import Layout from "@/components/layouts/Layout";
import LoginForm from "@/features/login/LoginForm";

export default function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}

Login.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};