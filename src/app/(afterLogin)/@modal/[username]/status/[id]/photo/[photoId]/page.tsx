import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";
import Post from "@/app/(afterLogin)/_components/Post";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };

  return (
    <main className="fixed bg-[rgba(0,0,0,0.95)] z-10 left-0 top-0 w-[100vw] h-[100vh] flex flex-row">
      <div className="flex-1 flex">
        <div className="flex-1">
          <PhotoModalCloseButton />
        </div>
        <div className="relative w-[580px]">
          <Image
            fill
            src={photo.link}
            alt="modal photo"
            className="object-cover flex justify-center items-center"
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="w-[360px] overflow-auto border-l-[1px] border-neutral-300">
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
