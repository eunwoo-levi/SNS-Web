import { IoSearch } from "react-icons/io5";

export default function SearchForm() {
  return (
    <form className="fixed bg-[rgba(239,243,244)] dark:bg-slate-800 flex items-center w-inherit h-[42px] mt-[6px] mb-[12px] rounded-3xl text-white">
      <IoSearch size={20} className="ml-4" color="gray" />
      <input
        type="search"
        placeholder="Search"
        className="ml-2 pl-3 bg-inherit outline-none text-black dark:text-white "
      />
    </form>
  );
}
