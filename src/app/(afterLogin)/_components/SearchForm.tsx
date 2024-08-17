import { IoSearch } from "react-icons/io5";

// searchParams : {q:string}
interface Props {
  searchParams?: {
    p?: string;
    f?: string;
    pf?: string;
  };
}

export default function SearchForm({ searchParams }: Props) {
  return (
    <form className="fixed  bg-[rgba(239,243,244)] dark:bg-slate-800 flex items-center w-inherit h-[42px] mt-[2px] mb-[12px] rounded-3xl text-white">
      <IoSearch size={20} className="ml-4" color="gray" />
      <input
        type="search"
        placeholder="Search"
        className="ml-2 pl-3 bg-inherit outline-none text-black dark:text-white "
      />
    </form>
  );
}
