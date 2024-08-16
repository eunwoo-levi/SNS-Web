import SearchForm from "../_components/SearchForm";
import Trend from "../_components/Trend";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch w-[600px] border-x-[1px] border-neutral-300">
      <div className="w-[566px] pl-[16px] mb-[60px]">
        <SearchForm />
      </div>
      <div className="text-[20px] font-bold mb-[12px] border-t-[0.5px] border-neutral-300">
        <h3 className="py-[12px] px-[16px]">Trend for you</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
