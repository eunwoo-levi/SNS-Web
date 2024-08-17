"use client";

import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

export default function PhotoModalCloseButton() {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };
  return (
    <button
      onClick={onClick}
      className="w-[36px] h-[36px] flex justify-center items-center hover:bg-gray-700 hover:bg-opacity-30 rounded-full m-4"
    >
      <IoClose size={25} />
    </button>
  );
}
