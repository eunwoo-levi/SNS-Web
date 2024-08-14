import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="  flex flex-row w-full min-h-screen items-center">
      <div className="flex-1 flex justify-center items-center">
        <Image width={500} height={500} src="/sLogo.png" alt="logo" />
      </div>
      <div className="flex-1 flex flex-col items-start gap-2">
        <h1 className="text-5xl font-bold mb-8">
          전세계 사람들과 소통해보세요!
        </h1>
        <h2 className="text-3xl my-4 font-semibold">지금 가입하세요.</h2>
        <div className="flex flex-row gap-x-4"></div>

        <Link
          href={"/i/flow/signup"}
          className="bg-blue-500 flex justify-center w-[300px] p-2 text-white font-semibold rounded-3xl"
        >
          계정 만들기
        </Link>
        <div>
          <h3 className="my-6">이미 계정이 있으신가요?</h3>
          <Link
            href={"/login"}
            className="flex justify-center w-[300px] p-2 text-center border border-gray-300 rounded-3xl text-blue-600"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
