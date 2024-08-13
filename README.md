< SNS Website > - Next.JS

< 라이브러리 >
- react-icons

< CSS >
- tailwind

< 상태관리 라이브러리 >
- zustand

< Login Page >
- 병렬 라우팅 (Parallel Routes, Intercepting Routes)    // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
  
Next 13에서 Parallel Routes가 새로 등장했는데 새로고침하거나 URL를 통해 직접 주소에 접근했을 경우 평소처럼 Login Page에 이동하게 되고 다른 페이지에서 Link를 통해 갈 경우 Intercepting Routes에 의해 Modal 페이지로 이동하게 된다.

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
