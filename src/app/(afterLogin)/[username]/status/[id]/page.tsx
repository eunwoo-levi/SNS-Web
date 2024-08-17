import BackButton from "@/app/(afterLogin)/_components/BackButton";
import Post from "@/app/(afterLogin)/_components/Post";
import CommentForm from "./_components/CommentForm";

const me = {
  image: "/idLogo.png",
};

export default function SinglePostPage() {
  return (
    <main className="flex flex-col items-stretch w-[600px] border-x-[1px] border-neutral-300">
      <div className="fixed flex items-center w-[598px] h-[55px] backdrop-blur">
        <div className="flex ml-[10px]">
          <BackButton />
          <h1 className="text-[20px] font-bold ml-[35px]">Post</h1>
        </div>
      </div>
      <div className="mt-[60px]"></div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
