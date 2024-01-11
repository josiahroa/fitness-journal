"use client";

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className="flex flex-col">
      <div>
        <div>
          <input className="border border-black" {...register("email")} />
        </div>
        <div>
          <input className="border border-black" {...register("password")} />
        </div>
      </div>
    </form>
  );
}
