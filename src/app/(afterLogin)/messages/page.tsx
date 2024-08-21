import { IoSettingsOutline } from "react-icons/io5";
import { TbMessage2Plus } from "react-icons/tb";
import Room from "./_components/Room";

export default function Page() {
  return (
    <main className="flex flex-col w-[400px] items-flex border-x-[1px] border-neutral-300">
      <div className="flex justify-between w-full h-[53px] ">
        <h1 className="text-20px font-bold">Messagess</h1>
        <div className="flex flex-row gap-5">
          <IoSettingsOutline size={21} />
          <TbMessage2Plus size={21} />
        </div>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
