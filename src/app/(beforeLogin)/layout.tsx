import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function BeforeLoginLayout({ children, modal }: LayoutProps) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
