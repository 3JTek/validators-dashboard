This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Folder Structure

This project follows NextJS App router structure for routing => https://nextjs.org/docs/app/building-your-application/routing

`app` => routing + page components/hooks/context...
`assets` => static assets (images, icons, videos...)
`ui` => small re-usable ui components (design system)
`helpers` => small re-usable helper functions

## Library uses

- React Grid => used to build the dashboard table. Comes with a lot of function by default and is very popular.

## State Management

- Currently used ContextApi but I would favor other alternative that decrease boiler plate and improve performances.

## Testing

- Have implemented Jest as our test runners but haven't written any tests for now. I would suggest starting to write test for the different hooks and then testing the main component end2end.

## TODO

- Clearly defined our design guideline in Tailwinds (fonts, color, border colors, etc...)
- Add a data layer to handle api calls
- Add tests
