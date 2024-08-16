"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Tab() {
  const [current, setCurrent] = useState("top");
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickTop = () => {
    setCurrent("top");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickLatest = () => {
    setCurrent("latest");
    router.replace(`/search?q=${searchParams.toString()}&f=live`);
  };

  console.log(current);
  return (
    <main className="z-10 flex w-[598px] border-b-[0.5px] border-neutral-300 pb-2">
      <div className="w-[598px] h-[53px] flex">
        <div
          onClick={onClickTop}
          className="relative flex-1 flex text-[15px] justify-center items-center hover:bg-neutral-400 hover:bg-opacity-30 cursor-pointer"
        >
          Top
          {current === "top" && (
            <div className="absolute bottom-0 w-[54px] h-[4px] flex items-center bg-blue-500 rounded-3xl" />
          )}
        </div>
        <div
          onClick={onClickLatest}
          className="relative flex-1 flex text-[15px] justify-center items-center hover:bg-neutral-400 hover:bg-opacity-30 cursor-pointer"
        >
          Latest
          {current === "latest" && (
            <div className="absolute bottom-0 w-[54px] h-[4px] flex items-center bg-blue-500 rounded-3xl" />
          )}
        </div>
      </div>
    </main>
  );
}
