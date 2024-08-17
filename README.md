< SNS Website > - Next.JS <br/><br/>
배포 : https://sns-eunwoo.vercel.app/

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

< **알게된 지식** >

- 1. 병렬 라우팅 (Parallel Routes, Intercepting Routes)    // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
<br/> -> Login/Singout 페이지 , Post 페이지
<br/>
Next 13에서 Parallel Routes가 새로 등장했는데 새로고침하거나 URL를 통해 직접 주소에 접근했을 경우 평소처럼 Login Page에 이동하게 되고 다른 페이지에서 Link를 통해 갈 경우 Intercepting Routes에 의해 Modal 페이지로 이동하게 된다.   Intercepting Routes : "(.)/ ~~"
<br/> 라우트 가로채기(Intercepting Routes)는 현재 레이아웃 안에서 라우트를 로드하면서 현재 페이지의 컨텍스트를 유지할 수 있게 해준다.
<br/><br/>

![image](https://github.com/user-attachments/assets/ef2892a7-80fb-4eb6-aeb0-c946cca9ec09)

<br/><br/>
- 훅: useSelectedLayoutSegment() <br/>
Next.js 13의 App Router는 URL 경로를 기반으로 레이아웃을 구성한다. <br/>
useSelectedLayoutSegment 훅은 현재 활성화된 세그먼트를 반환한. 예를 들어, 사용자가 특정 페이지를 탐색할 때 현재 경로에 해당하는 세그먼트가 무엇인지 확인하여, 해당 세그먼트에 맞춰 UI를 변경할 수 있다.<br/>
정리: useSelectedLayoutSegment: 현재 활성화된 레이아웃 세그먼트를 가져온다. ex) 사용자가 /dashboard 경로에 있다면 selectedSegment 값은 "dashboard"가 된다.

- 훅:  usePathname() <br/>
usePathname은 Next.js 13의 App Router에서 제공하는 훅(Hook)으로, 현재 페이지의 경로(pathname)를 가져올 때 사용된다. usePathname은 클라이언트 측에서 현재 URL의 경로를 쉽게 접근하고, 이 경로에 따라 동적으로 컴포넌트를 렌더링하거나, 다른 로직을 수행할 수 있게 해준다. <br/>
usePathname 훅은 현재 브라우저에서 사용 중인 경로(pathname)를 문자열 형태로 반환한다. 예를 들어, 사용자가 /dashboard/settings 페이지에 있다면, usePathname은 "/dashboard/settings"을 반환한다.

**useSelectedLayoutSegment() VS usePathname()** <br/>
현재 경로가 /dashboard/settings/profile이라면, 전자는 "/dashboard" , 후자는 "/dashboard/settings/profile" 를 반환한다. 즉, useSelectedLayoutSegment()는 각 레이아웃 단계에서 활성화된 세그먼트만 반환한다.

<br/><br/>

- 2. **useRouter ( + searchParams ) VS use redirect** <br/>

useRouter 는 클라이언트 컴포넌트에서   useParams, usePathname 등은  URL 정보 읽기  <br/>
push는 뒤로가기(back()) 가능, replace 불가능 - 보통 뒤로가기 하기 싫은 페이지 (로그인) <br/> <br/>

(permanentRedriect 혹은 )redirect는 서버에서 사이드 작업에서    (next.js참고) <br/><br/>


- **searchParams**  - (search 구현)
```javascript
interface Props{
    searchParams: { q: string };
}
export default function Search ( { searchParams } : Props){
    searchParams.~~~~   <- 이렇게 사용가능 (쿼리) 
return()
}
```

{paramsm searcgOarans} 중에서 params는 slug부분을 추출한다.

<br/><br/>

< **useSearchParams**  -  훅   (client 컴포넌트에서 사용가능) >
```javascript
cons searchParams  =  useSearchParams();
useSearchParams.get('q')                                     // get을 써서 괄호안에 원하는 쿼리 넣음
```

searchParams.toString() 하면 모든 쿼리 다 반환해


<br/><br/><br/>

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
