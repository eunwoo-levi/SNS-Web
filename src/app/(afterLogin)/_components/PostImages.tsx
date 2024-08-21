import Image from "next/image";
import Link from "next/link";

interface Props {
  post: {
    postId: number;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    content: string;
    createAt: Date;
    Images: any;
  };
}

export default function PostImages({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;
  if (post.Images.length === 1) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
      >
        <Image
          width={560}
          height={350}
          src={post.Images[0]?.link}
          alt="post image"
        />
      </Link>
    );
  }

  if (post.Images.length === 2) {
    return (
      <div className="flex flex-row justify-center items-center gap-[3px]">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        >
          <Image
            width={260}
            height={290}
            src={post.Images[0]?.link}
            alt="post image"
            className="flex-1 object-cover rounded-l-lg"
          />
        </Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
        >
          <Image
            width={260}
            height={290}
            src={post.Images[1]?.link}
            alt="post image"
            className="flex-1 object-cover rounded-r-lg"
          />
        </Link>
      </div>
    );
  }
  if (post.Images.length === 3) {
    return (
      <div className="flex flex-row justify-center items-center gap-[3px]">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        >
          <Image
            width={260}
            height={292}
            src={post.Images[0]?.link}
            alt="post image"
            className="h-[291px] object-cover rounded-l-lg"
          />
        </Link>
        <div className="flex flex-col gap-[3px]">
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          >
            <Image
              width={260}
              height={144}
              src={post.Images[1]?.link}
              alt="post image"
              className="h-[144px] object-cover rounded-tr-lg"
            />
          </Link>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          >
            <Image
              width={260}
              height={144}
              src={post.Images[2]?.link}
              alt="post image"
              className="h-[144px] object-cover rounded-br-lg"
            />
          </Link>
        </div>
      </div>
    );
  }

  if (post.Images.length === 4) {
    return (
      <div className="flex flex-row justify-center items-center gap-[3px]">
        <div className="flex flex-col gap-[3px]">
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          >
            <Image
              width={260}
              height={144}
              src={post.Images[0]?.link}
              alt="post image"
              className="h-[144px] object-cover rounded-tl-lg"
            />
          </Link>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          >
            <Image
              width={260}
              height={144}
              src={post.Images[1]?.link}
              alt="post image"
              className="h-[144px] object-cover rounded-bl-lg"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-[3px]">
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          >
            <Image
              width={260}
              height={144}
              src={post.Images[2]?.link}
              alt="post image"
              className="h-[144px] object-cover rounded-tr-lg"
            />
          </Link>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          >
            <Image
              width={260}
              height={144}
              src={post.Images[3]?.link}
              alt="post image"
              className="h-[144px] object-cover rounded-br-lg"
            />
          </Link>
        </div>
      </div>
    );
  }
}
