"use client";

import { IoClose } from "react-icons/io5";

export default function Page() {
  const onClickClose = () => {};

  return (
    <div className="fixed bg-[rgba(0,0,0,0.4)] top-0 left-0 right-0 bottom-0 w-full min-h-screen flex justify-center items-start">
      <div className="bg-white relative top-[10%] max-w-[80vw] min-w-[600px] h-[450px] flex flex-col rounded-xl">
        <button onClick={onClickClose} className="flex justify-end p-4">
          <IoClose size={30} />
        </button>
        <div className="px-[50px] pb-[20px] w-full flex flex-col gap-4 h-full">
          <h1 className="text-3xl font-bold pb-4">로그인하세요</h1>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="아이디"
              className="border w-full my-2 p-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="border w-full my-2 p-2 rounded-lg"
            />
          </form>
          <div className="flex justify-center mt-auto">
            <button className="bg-neutral-500 rounded-3xl text-white w-[30vw] p-2">
              로그인하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
