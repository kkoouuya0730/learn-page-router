import RequiredLabel from "@/components/elements/text/RequiredLabel";
import Layout from "@/components/layouts/Layout";
import LoginForm from "@/features/login/LoginForm";
import { MyInput } from "@/features/menu/MyInput";
import { useRef, useState } from "react";

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
