"use client";

import { useTabStore } from "@/app/store/useTablStore";

export default function Tab() {
  const { tab, setTab } = useTabStore();

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className="fixed w-[598px] bg-[rgba(255,255,255,0.85)] dark:bg-transparent backdrop-blur-sm border-b-[1px] border-solid">
      <div className="text-[20px] leading-[24px] font-bold py-[12px] px-[16px]">
        Home
      </div>
      <div className="flex h-[53px]">
        <div
          onClick={onClickRec}
          className="relative flex justify-center items-center flex-1 text-[15px] font-bold hover:bg-neutral-300 dark:hover:bg-[rgb(62,65,68)] cursor-pointer"
        >
          For you
          <div
            className="absolute bottom-0 bg-[rgba(29,155,240)] w-[56px] h-[4px] rounded-3xl"
            hidden={tab === "fol"}
          />
        </div>
        <div
          onClick={onClickFol}
          className="relative flex justify-center items-center flex-1 text-[15px] font-bold hover:bg-neutral-300 dark:hover:bg-[rgb(62,65,68)] cursor-pointer"
        >
          Following
          <div
            className="absolute bottom-0 bg-[rgba(29,155,240)] w-[72px] h-[4px] rounded-3xl"
            hidden={tab === "rec"}
          />
        </div>
      </div>
    </div>
  );
}
