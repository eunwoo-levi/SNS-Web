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
    <form className="sticky top-0 z-10 bg-[rgba(239,243,244)] dark:bg-slate-800 flex items-center w-full h-[42px] mt-[2px] mb-[12px] rounded-3xl">
      <IoSearch size={20} className="ml-4" color="gray" />
      <input
        type="search"
        placeholder="Search"
        className="ml-2 pl-3 bg-transparent outline-none text-black dark:text-white w-full"
      />
    </form>
  );
}
