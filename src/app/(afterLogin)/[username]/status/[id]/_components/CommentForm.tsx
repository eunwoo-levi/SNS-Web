"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";

export default function CommentForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const me = {
    id: "eunwoo1234",
    image: "/IdLogo.png",
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex  border-b-[1px] p-[16px] border-[rgb(47,51,54)]"
    >
      <div className="mr-[12px] w-[40px]">
        <Image
          width={40}
          height={40}
          src={me.image}
          alt="Id Logo"
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <textarea
          value={content}
          onChange={onChange}
          placeholder="Post your reply"
          className="w-full py-[12px] text-[20px] leading-[24px] bg-transparent outline-none"
        />
        <div className="w-full flex flex-row items-center">
          <div className="flex-1">
            <input
              type="file"
              name="imageFiles"
              multiple
              hidden
              ref={imageRef}
            />
            <button
              onClick={onClickButton}
              className="flex justify-center items-center w-[34px] h-[34px] rounded-full transition duration-200 hover:bg-[rgba(29,155,240,0.1)] cursor-pointer"
            >
              <CiImageOn size={24} color="rgb(29,155,240)" />
            </button>
          </div>
          <button
            disabled={!content}
            className="text-white font-bold text-[15px] rounded-3xl w-[94px] h-[36px] bg-[rgba(29,155,240)] hover:bg-[rgba(26,140,216)] disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
