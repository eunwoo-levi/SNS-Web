< SNS Website > - Next.JS <br/>
URL : https://sns-eunwoo.vercel.app/

< 구현 기능 >
- DarkMode (light/dark/system)
- 로그인
- // 글 올리기
- // SNS 채팅


< 라이브러리 >
- react-icons 
- dayjs  // Post를 올린 시간 계산
- tailwind-merge   // cn : tailwind 여러 className + 조건부로 사용
- shadcn   // darkmode

< CSS >
- tailwind

< 상태관리 라이브러리 >
- zustand

< Login Page >
- 병렬 라우팅 (Parallel Routes, Intercepting Routes)    // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
<br/> -> Login/Singout 페이지 , Post 페이지
<br/>
Next 13에서 Parallel Routes가 새로 등장했는데 새로고침하거나 URL를 통해 직접 주소에 접근했을 경우 평소처럼 Login Page에 이동하게 되고 다른 페이지에서 Link를 통해 갈 경우 Intercepting Routes에 의해 Modal 페이지로 이동하게 된다.   Intercepting Routes : "(.)/ ~~"
<br/> 라우트 가로채기(Intercepting Routes)는 현재 레이아웃 안에서 라우트를 로드하면서 현재 페이지의 컨텍스트를 유지할 수 있게 해준다.
![image](https://github.com/user-attachments/assets/ef2892a7-80fb-4eb6-aeb0-c946cca9ec09)


***
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
