import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
import ActionButton from "./ActionButton";

dayjs.locale("en");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: "eunwoo1234",
      nickname: "Eunwoo",
      image: "/user2.jpg",
    },
    content: "나만의 SNS 페이지 만들어 보는중..!",
    createAt: new Date(),
    Image: "/contentImg.png",
  };

  return (
    <article className="flex flex-col pt-[12px] pb-[8px] px-[16px] border-b-[1px] border-[rgb(47,51,54)] cursor-pointer hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(0,0,0,0.2)] transition duration-200">
      <div className="flex flex-row">
        <Link href={`/${target.User.id}`} className="w-[40px] mr-[12px]">
          <Image
            width={40}
            height={40}
            src={target.User.image}
            alt={target.User.nickname}
            className="rounded-full hover:shadow-lg "
          />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex flex-row">
            <Link href={`${target.User.id}`}>
              <span className="hover:underline">{target.User.nickname}</span>
              <span className="text-neutral-400 ml-2">@{target.User.id}</span>
            </Link>
            <span className="text-neutral-400 ml-2 hover:underline">
              {dayjs(target.createAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <Image
            width={600}
            height={400}
            src={target.Image}
            alt="content Image"
          />
          <ActionButton />
        </div>
      </div>
    </article>
  );
}
