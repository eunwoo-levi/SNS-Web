import Image from "next/image";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import Post from "../_components/Post";

const User = {
  id: "eunwoo1234",
  nickname: "Eunwoo",
  image: "/IdLogo.png",
};

export default function Home() {
  return (
    <main className="flex flex-col items-stretch w-[600px] border-x-[1px] border-neutral-300">
      <div className="flex flex-row h-[53px] items-center ml-[10px]">
        <IoArrowBack size={25} />
        <div className="w-[510px] pl-[20px] flex items-center">
          <h1 className="text-[22px] font-bold mr-2">{User.nickname}</h1>
          <BsFillShieldLockFill size={16} />
        </div>
      </div>
      <div className="w-[600px] h-[400] flex flex-col justify-center items-center mt-[20px]">
        <Image
          width={135}
          height={135}
          src={User.image}
          alt="user image"
          className="rounded-full border-[2px] border-white"
        />
        <div className="flex flex-col mt-[15px]">
          <div className="flex items-center">
            <h1 className="text-[22px] font-bold mr-1">{User.nickname}</h1>
            <MdVerified color="2483FF" size={20} />
          </div>
          <div className="text-neutral-500">@{User.id}</div>
        </div>
      </div>
      <button className="w-[140px] h-[38px] mx-auto my-[25px] bg-blue-500 rounded-3xl text-white font-bold">
        Follow
      </button>
      <div className="border-t-[0.5px] border-neutral-300 mt-2">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
