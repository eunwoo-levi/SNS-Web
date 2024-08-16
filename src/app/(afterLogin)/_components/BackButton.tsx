"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <button onClick={onClick}>
      <IoArrowBack size={25} />
    </button>
  );
}
