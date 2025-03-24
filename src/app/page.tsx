// app/page.tsx
// "use client";

// import { trpc } from "@/utils/trpc";

// export default function HomePage() {
//   const { data, isLoading, error } = trpc.hello.useQuery();

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return <h1>{data?.json}</h1>; // Use `data?.json` to extract the actual value
// }


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to the AI Interviewer
        </h1>
      </main>
    </div>
  );
}
