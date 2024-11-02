"use client";
import Button from "@/components/elements/button/Button";
import React, { useEffect, useId, useState } from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextForm } from "@/components/elements/form/TextForm";
import { SignIn, SignUp } from "./hooks";

export const loginFormTypeValue = ["login", "signUp"] as const;

type LoginFormType = (typeof loginFormTypeValue)[number];

type Props = {
  formType?: LoginFormType;
};

export type Inputs = {
  email: string;
  password: string;
};

export default function AuthForm({ formType = "login" }: Props) {
  const [buttonValid, setButtonValid] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at last 8 characters")
      .max(13, "Password must be less than 13 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    resetField,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    switch (formType) {
      case "login":
        SignIn(data);
      case "signUp":
        SignUp(data);
    }
  };

  const watchedValue = useWatch({
    control,
    defaultValue: { email: "", password: "" },
  });

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
          iconType="email"
          {...register("email")}
          aria-invalid={errors.email ? true : false}
          aria-describedby={errors.email ? emailErrorId : undefined}
          onClickClearButton={() => resetField("email")}
          shouldShowClearButton={watchedValue.email !== ""}
          isRequired
        />
        {errors.email && (
          <p id={emailErrorId} role="alert" className="text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <TextForm
          type="password"
          label="Password"
          iconType="password"
          {...register("password")}
          aria-invalid={errors.password ? true : false}
          aria-describedby={errors.password ? passwordErrorId : undefined}
          onClickClearButton={() => resetField("password")}
          shouldShowClearButton={watchedValue.password !== ""}
          isRequired
        />
        {errors.password && (
          <p id={passwordErrorId} role="alert" className="text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <p className="text-center">
        <Button type="submit" color="primary" disabled={buttonValid}>
          {formType.toUpperCase()}
        </Button>
      </p>
    </form>
  );
}
