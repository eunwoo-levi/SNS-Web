import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
      <Link href={"/search"} className="bg-red-500 p-2 rounded-lg text-white ">
        검색
      </Link>
    </div>
  );
}
