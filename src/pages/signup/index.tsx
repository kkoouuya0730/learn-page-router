import AuthForm from "@/components/AuthForm";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";

export default function SignUp() {
  return (
    <>
      <div className="text-center">
        <CustomHeading tag="h1" className="mb-2">
          SignUp
        </CustomHeading>
      </div>
      <AuthForm formType="signUp" />
    </>
  );
}

SignUp.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
