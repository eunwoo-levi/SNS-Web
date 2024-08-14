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
          <div className="flex items-center h-[50px] p-[12px] ml-[4px] text-[20px]">
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
          <div className="flex items-center h-[50px] p-[12px] ml-[4px] text-[20px]">
            <IoSearch size={segment === "explore" ? 36 : 30} />
            <div
              className={segment === "explore" ? "ml-2.5 font-bold" : "ml-4"}
            >
              Explore
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/messages"}>
          <div className="flex items-center h-[50px] p-[12px] ml-[4px] text-[20px]">
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
            <div className="flex items-center h-[50px] p-[12px] ml-[4px] text-[20px]">
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
