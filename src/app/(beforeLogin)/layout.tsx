import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
