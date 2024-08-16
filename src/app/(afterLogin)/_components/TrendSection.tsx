import Trend from "./Trend";

export default function TrendSection() {
  return (
    <div className="border border-neutral-300 mt-[20px] rounded-2xl">
      <div className="text-[20px] fond-bold p-[12px]">
        <h3 className="mb-[12px] font-bold">Trends for you</h3>
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
    </div>
  );
}
