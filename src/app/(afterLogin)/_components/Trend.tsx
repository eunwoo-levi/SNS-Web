import Link from "next/link";

export default function Trend() {
  return (
    <Link
      href={"/search?q=trend"}
      className="block h-[82px] py-[12px] px-[16px] hover:bg-[rgba(0,0,0,0.03)] rounded-lg"
    >
      <div className="text-[rgba(83,100,113)] text-[13px] font-light leading-[16px]">
        실시간트렌드
      </div>
      <div className="text-[15px] font-bold mt-[2px] mb-[4px]">은우</div>
      <div className="text-[rgba(83,100,113)] text-[13px] font-light leading-[16px]">
        1,234 posts
      </div>
    </Link>
  );
}
