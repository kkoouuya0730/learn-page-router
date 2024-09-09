import Button from "@/components/elements/button/Button";
import React, { useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import RequiredLabel from "@/components/elements/text/RequiredLabel";
import CustomHeading from "@/components/elements/text/CustomHeading";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const emailId = useId();
  const passwordId = useId();
  return (
    <div className="text-center">
      <CustomHeading tag="h1" className="mb-2">
        ログイン
      </CustomHeading>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <p>
            <label htmlFor={emailId} className="mr-4">
              Email
            </label>
            <RequiredLabel />
          </p>
          <input
            id={emailId}
            type="email"
            {...register("email")}
            className="border rounded-lg"
            // aria-label="メールアドレス"
            aria-required="true"
            aria-invalid={errors.email ? true : false}
            aria-describedby={
              errors.email ? "email-error" : undefined
            }
            autoComplete="email"
          />
          {errors.email && (
            <p id="email-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-2">
          <p>
            <label htmlFor={passwordId} className="mr-4">
              Password
            </label>
            <RequiredLabel />
          </p>
          <input
            id={passwordId}
            type="password"
            {...register("password")}
            className="border rounded-lg"
            // aria-label="パスワード"
            aria-required="true"
            aria-invalid={errors.password ? true : false}
            aria-describedby={
              errors.password ? "password-error" : undefined
            }
            required
          />
          {errors.password && (
            <p id="password-error" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <p>
          <Button type="submit" color="primary">
            ログイン
          </Button>
        </p>
      </form>
    </div>
  );
}
