"use client";

export default function Tab() {
  const onClickRec = () => {};
  const onClickFol = () => {};

  return (
    <div className="fixed w-[598px] bg-[rgba(255,255,255,0.85)] dark:bg-transparent backdrop-blur-sm border-b-[1px] border-solid">
      <div className="text-[20px] leading-[24px] font-bold py-[12px] px-[16px]">
        Home
      </div>
      <div className="flex h-[53px]">
        <div
          onClick={onClickRec}
          className="relative flex justify-center items-center flex-1 text-[15px]"
        >
          For you
        </div>
        <div
          onClick={onClickFol}
          className="relative flex justify-center items-center flex-1 text-[15px]"
        >
          Following
        </div>
      </div>
    </div>
  );
}
