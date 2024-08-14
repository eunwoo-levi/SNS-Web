"use client";

import { useRouter } from "next/navigation";
import Main from "../_components/Main";

export default function Home() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}
