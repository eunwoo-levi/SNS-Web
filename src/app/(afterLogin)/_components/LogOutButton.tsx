"use client";
import Image from "next/image";

export default function LogOutButton() {
  const me = {
    id: "eunwoo1234",
    nickname: "Eunwoo",
    image: "/IdLogo.png",
  };
  const onLogOut = () => {};

  return (
    <button
      onClick={onLogOut}
      className="min-w-[72px] lg:w-[258px] h-[66px] mb-[25px] pl-[10px] flex items-center cursor-pointer hover:bg-[rgba(15,20,25,0.1)] rounded-3xl"
    >
      <div className="flex justify-center items-center pr-2">
        <Image
          width={50}
          height={50}
          src={me.image}
          alt={me.id}
          className="rounded-full dark:border border-white"
        />
      </div>
      <div className="m-2 hidden lg:flex flex-col items-start">
        <div className="font-bold">{me.nickname}</div>
        <div className="text-neutral-600">@{me.id}</div>
      </div>
    </button>
  );
}
