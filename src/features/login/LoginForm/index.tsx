"use client";
import Button from "@/components/elements/button/Button";
import React, { useEffect, useId, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextForm } from "@/components/elements/form/TextForm";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [buttonValid, setButtonValid] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at last 8 characters")
      .max(13, "Password must be less than 13 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    isValid ? setButtonValid(false) : setButtonValid(true);
  }, [isValid]);

  const emailErrorId = useId();
  const passwordErrorId = useId();
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-4">
        <TextForm
          type="email"
          label="Email"
          isRequired={true}
          iconType="email"
          {...register("email")}
          aria-invalid={errors.email ? true : false}
          aria-describedby={
            errors.email ? emailErrorId : undefined
          }
        />
        {errors.email && (
          <p
            id={emailErrorId}
            role="alert"
            className="text-red-500"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <TextForm
          type="password"
          label="Password"
          isRequired={true}
          iconType="password"
          {...register("password")}
          aria-invalid={errors.password ? true : false}
          aria-describedby={
            errors.password ? passwordErrorId : undefined
          }
        />
        {errors.password && (
          <p
            id={passwordErrorId}
            role="alert"
            className="text-red-500"
          >
            {errors.password.message}
          </p>
        )}
      </div>

      <p className="text-center">
        <Button
          type="submit"
          color="primary"
          disabled={buttonValid}
        >
          ログイン
        </Button>
      </p>
    </form>
  );
}
