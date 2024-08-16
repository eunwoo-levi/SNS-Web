"use client";

import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";

export default function RightSearchZone() {
  const pathname = usePathname();
  const onChangeAll = () => {};
  const onChangeFollow = () => {};
  const onChangeAny = () => {};
  const onChangeNear = () => {};

  if (pathname === "/explore") {
    return null;
  }
  if (pathname === "/search") {
    return (
      <div>
        <h5 className="border border-neutral-300 p-[10px] rounded-2xl my-[15px] text-[20px] font-bold">
          Search filters
        </h5>
        <div className="border border-neutral-300 rounded-2xl">
          <div className="flex flex-col gap-1 font-semibold p-[10px]">
            <label>People</label>
            <div className="flex justify-between">
              <div>People</div>
              <input
                type="radio"
                name="ppl"
                defaultChecked
                onChange={onChangeAll}
                className="w-[20px] h-[20px]"
              />
            </div>
            <div className="flex justify-between">
              <div>People you follow</div>
              <input
                type="radio"
                name="ppl"
                onChange={onChangeFollow}
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 font-semibold p-[10px]">
            <label>Location</label>
            <div className="flex justify-between">
              <div>Anywhere</div>
              <input
                type="radio"
                name="loc"
                defaultChecked
                onChange={onChangeAny}
                className="w-[20px] h-[20px]"
              />
            </div>
            <div className="flex justify-between">
              <div>Near you</div>
              <input
                type="radio"
                name="loc"
                onChange={onChangeNear}
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-[60px] w-[350px]">
      <SearchForm />
    </div>
  );
}
