import { faker } from "@faker-js/faker";
import Link from "next/link";
import BackButton from "../../_components/BackButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatRoom() {
  const User = {
    id: "levi123",
    nickname: "Levi",
    image: faker.image.avatar(),
  };

  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "levi123",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "finny123",
      content: "안녕히가세요.",
      createdAt: new Date(),
    },
  ];

  return (
    <main className="flex flex-col items-stretch px-[16px] w-[600px] min-h-[100vh] border-x-[1px] border-neutral-300">
      <div className="h-[54px] flex items-center">
        <BackButton />
        <div className="pl-[10px]">
          <h2 className="font-bold">{User.nickname}</h2>
        </div>
      </div>
      <Link
        href={User.nickname}
        className="mb-[20px] h-[305px] flex flex-col items-center border-b-[1px] border-neutral-300 hover:bg-gray-900 pt-[20px] transition duration-200 pr-[16px]  cursor-pointer"
      >
        <img
          src={User.image}
          alt={User.id}
          className="w-[64px] h-[64px] rounded-full"
        ></img>
        <div>
          <b>{User.nickname}</b>
        </div>
        <div className="text-neutral-600">@{User.id}</div>
      </Link>
      <div className="flex flex-col">
        {messages.map((m) => {
          if (m.id === "finny123") {
            return (
              <div
                key={m.messageId}
                className="flex flex-col items-end py-[15px]"
              >
                <div className="text-[15px] py-[12px] px-[16px] leading-[20px] bg-[#0083eb] text-white rounded-tl-[22px] rounded-tr-[22px] rounded-bl-[22px] rounded-br-[3.5px]">
                  {m.content}
                </div>
                <div className="text-[13px] text-[#536471] mt-[8px]">
                  {dayjs(m.createdAt).format("DD MMMM HH:mm A")}
                </div>
              </div>
            );
          }
          return (
            <div
              key={m.messageId}
              className="flex flex-col items-start py-[15px]"
            >
              <div className="text-[15px] py-[12px] px-[16px] leading-[20px] bg-[#0083eb]  text-white rounded-tl-[22px] rounded-tr-[22px] rounded-br-[22px] rounded-bl-[3.5px]">
                {m.content}
              </div>
              <div className="text-[13px] text-[#536471] mt-[8px]">
                {dayjs(m.createdAt).format("DD MMMM HH:mm A")}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
