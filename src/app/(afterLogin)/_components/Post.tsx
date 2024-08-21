import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
import ActionButton from "./ActionButton";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
import PostImages from "./PostImages";

dayjs.locale("en");
dayjs.extend(relativeTime);

interface Props {
  noImage?: boolean;
}

export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: "eunwoo1234",
      nickname: "Eunwoo",
      image: "/user2.jpg",
    },
    content: "나만의 SNS 페이지 만들어 보는중..!",
    createAt: new Date(),
    Images: [] as any,
  };

  if (Math.random() > 0.5) {
    target.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
    target.Images.push({ imageId: 2, link: faker.image.urlLoremFlickr() });
    target.Images.push({ imageId: 3, link: faker.image.urlLoremFlickr() });
    target.Images.push({ imageId: 4, link: faker.image.urlLoremFlickr() });
  }

  return (
    <PostArticle post={target}>
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
          <div className="pr-4">{!noImage && <PostImages post={target} />}</div>
          <ActionButton />
        </div>
      </div>
    </PostArticle>
  );
}
