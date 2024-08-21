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
        <section className="w-[72px] lg:w-[275px] h-[100dvh] transition-all duration-300 ease-in-out">
          <div className="fixed w-inherit px-[8px] h-[100dvh] flex flex-col items-center lg:items-start">
            <div className="flex justify-between items-center lg:w-[200px] mb-2">
              <div className="flex flex-col gap-[10px] items-center lg:flex-row">
                <Link href={"/home"} className="inline-block mt-[2px]">
                  <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center hover:bg-neutral-700">
                    <Image
                      width={33}
                      height={33}
                      src={"/sLogo2.png"}
                      alt="logo"
                      className="rounded-lg"
                    />
                  </div>
                </Link>
                <div className="lg:mt-[8px]">
                  <DarkModeButton />
                </div>
              </div>
            </div>
            <nav className="flex-1">
              <ul>
                <NavMenu />
              </ul>
              <Link
                href={"/compose/post"}
                className="bg-blue-400 rounded-3xl text-white font-semibold w-[50px] h-[50px] lg:w-[220px] lg:h-[46px] mt-[10px] p-2.5 flex justify-center items-center mx-auto hover:bg-[rgba(26,140,216)] transition"
              >
                <span className="hidden lg:flex">Post</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ fill: "white", width: "24px", height: "24px" }}
                  className="lg:hidden"
                >
                  <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                </svg>
              </Link>
            </nav>
            <LogOutButton />
          </div>
        </section>
      </header>
      <div className="flex flex-col items-start flex-grow h-[100dvh]">
        <div className="w-full max-w-[990px] h-full flex justify-between mx-auto px-4">
          <main className="w-full max-w-[600px]">{children}</main>
          <section className="hidden lg:block w-[350px]">
            <RightSearchZone />
            <TrendSection />
            <div className="border border-neutral-300 mt-[12px] px-[16px] py-[12px] text-[20px] font-bold rounded-xl">
              <h3 className="pb-[12px]">Who to follow</h3>
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
