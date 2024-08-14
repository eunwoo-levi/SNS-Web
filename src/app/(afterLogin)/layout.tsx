import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { IoSearch } from "react-icons/io5";
import NavMenu from "./_components/NavMenu";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-stretch min-h-screen">
      <header className="flex flex-col items-end flex-grow">
        <section className="w-[275px] h-[100dvh]">
          <div className="fixed bg-orange-400 w-[275px] h-[100dvh] flex flex-col">
            <Link href={"/home"} className="inline-block mt-[2px]">
              <div className="w-[60px] h-[60px] pl-2 rounded-full flex justify-center items-center hover:bg-[rgba(15,20,25,0.1)]">
                <Image width={50} height={50} src={"/sLogo.png"} alt="logo" />
              </div>
            </Link>
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
            <div>LogOut</div>
          </div>
        </section>
      </header>
      <div className="flex flex-col items-start flex-grow h-[100dvh]">
        <div className="bg-blue-400 w-[990px] h-[100%] flex justify-between">
          <main className="bg-red-500 w-[600px]">{children}</main>
          <section className="bg-blue-600 w-[350px]">
            <form className="fixed bg-gray-200 flex items-center w-[350px] h-[42px] mt-[6px] mb-[12px] rounded-3xl">
              <IoSearch size={20} className="ml-4" />
              <input
                type="search"
                placeholder="Search"
                className="ml-2 pl-3 bg-transparent"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
