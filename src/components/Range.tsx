import { InputHTMLAttributes } from "react";

export function Range(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex gap-4 items-center">
      <p>{props.min}</p>
      <input
        {...props}
        type="range"
        className={`${props.className} w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-500`}
      />
      <p>{props.max}</p>
    </div>
  );
}

