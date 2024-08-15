"use client";

import Image from "next/image";

const user = {
  id: "levi1234",
  nickname: "levi",
  image: "/IdLogo.png",
};

export default function FollowRecommend() {
  const onFollow = () => {};
  return (
    <div className="flex py-[12px] h-[66px]">
      <div className="w-[40px] mr-[12px]">
        <Image
          width={35}
          height={35}
          src={user.image}
          alt="user.id"
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="text-[15px] font-bold leading-[20px]">
          {user.nickname}
        </div>
        <div className="text-[rgba(83,100,113)] text-[13px] leading-[16px]">
          @{user.id}
        </div>
      </div>
      <div className="w-[76px]">
        <button
          onClick={onFollow}
          className="bg-black w-[100%] h-[32px] text-[14px] font-bold text-white cursor-pointer rounded-3xl hover:bg-[rgba(39,44,48)]"
        >
          Follow
        </button>
      </div>
    </div>
  );
}
