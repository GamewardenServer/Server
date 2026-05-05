import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${props.className} bg-zinc-800 w-full p-4 px-6`} />;
}

