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

# mintable-lite

To run pocketbase which is the stand in backend used for this project:

```bash
cd pockerbase_0

./pocketbase serve
```

Though the register hook is there, it wasn't integrated so do use the following test credetials to login:
username = ppch09@gmail.com
password = Test1234

## Overview
Video preview:
[https://streamable.com/e/bnr5s](https://streamable.com/bnr5ss?src=player-page-share)

Structure overview:
<img width="626" alt="Screenshot 2023-10-18 at 8 03 51 AM" src="https://github.com/csnewie/mintable-lite/assets/30197268/85ac94d1-953b-43c2-84ad-c24b2258dbd2">

## To work on

- Clean up routing and Context state management
- Finish typing the componets and use dynamic data instead of hardcoded template examples
- Try using opensea api to retrive nft collections for the particular wallet and display (is there an alternative to this for ethersjs)
- Currently using ContextAPI but would prefer to use Redux when scaling (will help with the multiple re-renders when only selective states are needed)
- Adding in the user registeration parts
