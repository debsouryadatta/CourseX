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


### Steps of dev:
1. Initialise nextjs project, install shadcn, 
2. Setting up prisma, Setting up nextauth -> All from docs & taking help from bidsage project
3. Using Acceternity ui kit for design
4. pnpm add next-themes, designing the Navbar, Designing the Create Course page
5. Writing the code for generating the course, usng langchainjs with groq api for generation
6. Also using Youtube Api and the Unsplaash api for fetching the yt video and the image(Taking reference from the previous project)
7. Designing the Gallery page
8. Designing the Course page
9. Course page functionality - taking the slug from the route, if slug.length=1(show course details), else if slug.length>1(show the chapter component)
