import BackButton from "../_components/BackButton";
import Post from "../_components/Post";
import SearchForm from "../_components/SearchForm";
import Tab from "./_components/Tab";

export default function SearchPage() {
  return (
    <main className="w-[600px] flex flex-col items-stretch min-h-screen border-x-[1px] border-neutral-300">
      <div className="fixed w-[600px] bg-[rgba(255,255,255,0.85)] dark:bg-transparent backdrop-blur-sm dark:backdrop-blur-md">
        <div className="flex items-center">
          <div className="w-[56px] h-[56px] flex items-center justify-center">
            <BackButton />
          </div>
          <div className="flex-1 w-[526px] h-[53px]">
            <SearchForm />
          </div>
        </div>
        <Tab />
      </div>
      <div>
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
