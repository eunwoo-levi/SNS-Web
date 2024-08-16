"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function TweetModal() {
  const router = useRouter();
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

  const onClickClose = () => {
    router.back();
  };

  return (
    <div className="w-[100vw] min-h-screen flex justify-center z-20 absolute top-0 bottom-0 left-0 right-0 bg-white bg-opacity-40">
      <div className="relative bg-white dark:bg-black top-[5%] max-w-[80vw] min-w-[600px] max-h-[400px] border flex flex-col rounded-xl">
        <button
          onClick={onClickClose}
          className="absolute top-[8px] right-[8px] flex w-[34px] h-[34px] justify-center items-center cursor-pointer rounded-full hover:bg-[rgba(15,20,25,0.1)]"
        >
          <IoClose size={30} />
        </button>
        <form onSubmit={onSubmit} className="flex flex-col h-full p-[16px]">
          <div className="flex-1 flex flex-row mt-[20px] border-b border-[rgb(30,41,59)]">
            <div className="mr-[12px] w-[40px]">
              <Image
                width={40}
                height={40}
                src={me.image}
                alt="Id Logo"
                className="rounded-full dark:border border-white"
              />
            </div>
            <div className="flex-1">
              <textarea
                value={content}
                onChange={onChange}
                placeholder="Share any interesting stories you had today :)"
                className="w-full h-full text-[20px] leading-[24px] bg-transparent outline-none "
              />
            </div>
          </div>
          <div className="mt-auto flex flex-row justify-between pt-[5px]">
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
            <button
              disabled={!content}
              className="text-white font-bold text-[15px] rounded-3xl w-[94px] h-[36px] bg-[rgba(29,155,240)] hover:bg-[rgba(26,140,216)] disabled:opacity-50"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
