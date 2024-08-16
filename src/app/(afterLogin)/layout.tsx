import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import NavMenu from "./_components/NavMenu";
import LogOutButton from "./_components/LogOutButton";
import TrendSection from "./_components/TrendSection";
import FollowRecommend from "./_components/FollowReccomend";
import { DarkModeButton } from "@/components/DarkModeButton";
import RightSearchZone from "./_components/RightSearchZone";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className="flex items-stretch min-h-screen">
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
                href={"/compose/post"}
                className="bg-blue-400 rounded-3xl text-white font-semibold w-[220px] h-[46px] mt-[10px] p-2.5 flex justify-center items-center mx-auto hover:bg-[rgba(26,140,216)] transition"
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
            <RightSearchZone />
            <TrendSection />
            <div className="border border-neutral-300 mt-[12px] px-[16px] py-[12px] text-[20px] font-bold rounded-xl">
              <h3 className="pb-[12px] ">Who to follow</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
