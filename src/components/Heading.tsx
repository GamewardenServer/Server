import React from "react";

export function Heading({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-black italic">{children}</h1>;
}
