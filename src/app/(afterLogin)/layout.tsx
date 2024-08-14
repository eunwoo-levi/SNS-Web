import { ReactNode } from "react";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-stretch">
      <header className="flex flex-col flex-end flex-grow-1"></header>
      <div className="flex flex-col flex-start flex-grow-1"></div>
      {children}
    </div>
  );
}
