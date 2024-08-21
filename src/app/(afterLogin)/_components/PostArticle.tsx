"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ImageType {
  imageId: number;
  link: string;
}

interface Props {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createAt: Date;
    Images: ImageType[];
  };
}

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article
      onClickCapture={onClick}
      className=" flex flex-col pt-[12px] pb-[8px] px-[16px] border-b-[1px] border-[rgb(47,51,54)] cursor-pointer hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(0,0,0,0.2)] transition duration-200"
    >
      {children}
    </article>
  );
}
