import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { IoSearch } from "react-icons/io5";
import NavMenu from "./_components/NavMenu";
import LogOutButton from "./_components/LogOutButton";
import TrendSection from "./_components/TrendSection";
import FollowRecommend from "./_components/FollowReccomend";
import { DarkModeButton } from "@/components/DarkModeButton";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-stretch h-[200vh]">
      <header className="flex flex-col items-end flex-grow">
        <section className="w-[275px] h-[100dvh]">
          <div className="fixed w-[275px] h-[100dvh] flex flex-col">
            <div className="flex justify-between items-center w-[200px] mb-2">
              <Link href={"/home"} className="inline-block mt-[2px]">
                <div className="w-[60px] h-[60px] pl-2 rounded-full flex justify-center items-center hover:bg-[rgba(15,20,25,0.1)]">
                  <Image
                    width={33}
                    height={33}
                    src={"/sLogo2.png"}
                    alt="logo"
                    className="rounded-lg"
                  />
                </div>
              </Link>
              <DarkModeButton />
            </div>
            <nav className="flex-1">
              <ul>
                <NavMenu />
              </ul>
              <Link
                href={"/compose/tweet"}
                className="bg-blue-400 rounded-3xl text-white font-semibold w-[200px] p-2.5 flex justify-center items-center mx-auto hover:bg-[rgba(26,140,216)] transition"
              >
                Post
              </Link>
            </nav>
            <LogOutButton />
          </div>
        </section>
      </header>
      <div className="flex flex-col items-start flex-grow h-[100dvh]">
        <div className="w-[990px] h-[100%] flex justify-between">
          <main className="w-[600px]">{children}</main>
          <section className="w-[350px]">
            <div className="mb-[60px] w-[350px]">
              <form className="fixed bg-gray-200 flex items-center w-[350px] h-[42px] mt-[6px] mb-[12px] rounded-3xl">
                <IoSearch size={20} className="ml-4" color="black" />
                <input
                  type="search"
                  placeholder="Search"
                  className="ml-2 pl-3 bg-transparent"
                />
              </form>
            </div>
            <TrendSection />
            <div className="border border-neutral-300 mt-[12px] px-[16px] py-[12px] text-[20px] font-bold rounded-lg">
              <h3 className="pb-[12px] ">Who to follow</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
