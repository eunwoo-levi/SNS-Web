"use client";

import { cn } from "@/lib/utils";
import { BiRepost } from "react-icons/bi";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";

export default function ActionButton() {
  const commented = true;
  const reposted = true;
  const liked = false;

  const onClickComment = () => {};
  const onClickRepost = () => {};
  const onClickHeart = () => {};

  return (
    <div className="flex flex-row justify-between items-center mt-[10px] mx-[10px]">
      <div className="flex items-center">
        <button
          onClick={onClickComment}
          className="w-[38px] h-[38px] flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-300 hover:bg-opacity-20 transition duration-200"
        >
          <FaRegComment
            size={20}
            className={cn("text-gray-500", commented && "text-blue-400")}
          />
        </button>
        <div className="ml-1 text-[13px] text-blue-400">{1 || ""}</div>
      </div>
      <div className="flex items-center">
        <button
          onClick={onClickRepost}
          className="w-[38px] h-[38px] flex justify-center items-center rounded-full cursor-pointer hover:bg-green-300 hover:bg-opacity-20 transition duration-200"
        >
          <BiRepost
            size={29}
            className={cn("text-gray-500", reposted && "text-green-400")}
          />
        </button>
        <div className="ml-1 text-[13px] text-green-400">{1 || ""}</div>
      </div>
      <div className="flex items-center">
        <button
          onClick={onClickHeart}
          className="w-[38px] h-[38px] flex justify-center items-center rounded-full cursor-pointer hover:bg-pink-300 hover:bg-opacity-20 transition duration-200"
        >
          <FaRegHeart
            size={20}
            className={cn("text-gray-500", liked && "text-pink-400")}
          />
        </button>
        <div className="ml-1 text-[13px] text-pink-400">{0 || ""}</div>
      </div>
    </div>
  );
}
