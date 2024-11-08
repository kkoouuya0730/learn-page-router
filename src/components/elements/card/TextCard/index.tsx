import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function TextCard({ children }: Props) {
  return (
    <>
      <div className="border rounded-lg border-gray-300 p-3 h-full">
        {children}
      </div>
    </>
  );
}
