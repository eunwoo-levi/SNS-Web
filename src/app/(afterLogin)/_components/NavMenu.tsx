"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { IoMdPerson } from "react-icons/io";
import {
  IoHomeOutline,
  IoHomeSharp,
  IoMailOutline,
  IoMailSharp,
  IoPersonOutline,
  IoSearch,
} from "react-icons/io5";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  const me = { id: "levi" };

  return (
    <>
      <li>
        <Link href={"/home"}>
          <div className="inline-flex items-center h-[50px] p-[12px] text-[20px] rounded-3xl  pr-[24px] hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-neutral-900 transition duration-200">
            {segment === "home" ? (
              <>
                <IoHomeSharp size={30} />
                <div className="ml-4 font-bold">Home</div>
              </>
            ) : (
              <>
                <IoHomeOutline size={30} />
                <div className="ml-4">Home</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/explore"}>
          <div className="inline-flex items-center h-[50px] p-[12px] text-[20px] rounded-3xl  pr-[24px] hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-neutral-900 transition duration-200">
            <IoSearch
              size={
                segment && ["explore", "search"].includes(segment) ? 36 : 30
              }
            />
            <div
              className={
                segment && ["explore", "search"].includes(segment)
                  ? "ml-2.5 font-bold"
                  : "ml-4"
              }
            >
              Explore
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/messages"}>
          <div className="inline-flex items-center h-[50px] p-[12px] text-[20px] rounded-3xl  pr-[24px] hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-neutral-900 transition duration-200">
            {segment === "messages" ? (
              <>
                <IoMailSharp size={30} />
                <div className="ml-4 font-bold">Messages</div>
              </>
            ) : (
              <>
                <IoMailOutline size={30} />
                <div className="ml-4">Messages</div>
              </>
            )}
          </div>
        </Link>
      </li>
      {me?.id && (
        <li>
          <Link href={"/profile"}>
            <div className="inline-flex items-center h-[50px] p-[12px] text-[20px] rounded-3xl  pr-[24px] hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-neutral-900 transition duration-200">
              {segment === "profile" ? (
                <>
                  <IoMdPerson size={30} />
                  <div className="ml-4 font-bold">Profile</div>
                </>
              ) : (
                <>
                  <IoPersonOutline size={30} />
                  <div className="ml-4">Profile</div>
                </>
              )}
            </div>
          </Link>
        </li>
      )}
    </>
  );
}
