"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SignupModal() {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setImageFile(e.target.files[0]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:9090/api/users", {
      method: "post",
      body: JSON.stringify({
        nickname,
        id,
        password,
        image,
      }),
      credentials: "include",
    })
      .then((res: Response) => {
        console.log(res.status);
        if (res.status === 200) {
          router.replace("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fixed bg-[rgba(0,0,0,0.4)] top-0 left-0 right-0 bottom-0 w-full min-h-screen flex justify-center items-start">
      <div className="bg-white relative top-[10%] max-w-[80vw] min-w-[600px] h-[500px] flex flex-col rounded-xl">
        <button onClick={onClickClose} className="flex justify-end p-4">
          <IoClose size={30} />
        </button>
        <div className="px-[50px] pb-[20px] w-full flex flex-col gap-4 h-full">
          <h1 className="text-3xl font-bold pb-4 text-black">
            계정을 생성하세요.
          </h1>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="닉네임"
              className="border w-full my-2 p-2 rounded-lg bg-white text-black"
              value={nickname}
              onChange={onChangeNickname}
            />
            <input
              type="text"
              placeholder="아이디"
              className="border w-full my-2 p-2 rounded-lg bg-white text-black"
              value={id}
              onChange={onChangeId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="border w-full my-2 p-2 rounded-lg bg-white text-black"
              value={password}
              onChange={onChangePassword}
            />
            <input
              type="file"
              placeholder="프로필"
              className="border w-full my-2 p-2 rounded-lg text-black"
              accept="image/*"
              onChange={onChangeImageFile}
              multiple
            />
          </form>
          <div className="flex justify-center mt-auto">
            <button className="bg-neutral-500 rounded-3xl text-white w-[30vw] p-2">
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
