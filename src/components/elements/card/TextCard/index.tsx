import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function TextCard({ children }: Props) {
  return (
    <>
      <div className="border rounded-lg border-gray-700 p-3">
        {children}
      </div>
    </>
  );
}
