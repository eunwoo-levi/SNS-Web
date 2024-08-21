"use client";

import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";

dayjs.extend(relativeTime);

export default function Room() {
  const User = {
    id: "levi123",
    nickname: "Levi",
    Messages: [
      { roomId: 123, content: "Nice to meet you!", createdAt: new Date() },
      {
        roomId: 123,
        content: "it was good to see you:)",
        createdAt: new Date(),
      },
    ],
  };

  const router = useRouter();

  const onClick = () => {
    router.push(`/messages/${User.Messages.at(-1)?.roomId}`);
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center w-full h-[74px] mb-[5px] hover:bg-slate-900 transition duration-200 pl-4 cursor-pointer"
    >
      <img
        width={40}
        height={40}
        src={faker.image.avatar()}
        alt="avatar"
        className="rounded-full mr-[10px]"
      />
      <div className="w-[310px] h-[42px] px-[6px]">
        <div className="w-[300px]  h-[22px] flex">
          <b className="text-[15px] font-bold">{User.nickname}</b>&nbsp;
          <span className="text-[14px] text-neutral-600">@{User.id}</span>
          &nbsp;·&nbsp;
          <span className="text-[14px] text-neutral-600">
            {dayjs(User.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className="w-[270px] h-[20px]">
          {User.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
