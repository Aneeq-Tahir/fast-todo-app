const API_ENDPOINT =
   process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;

export default async function Home() {
   const data = await fetch(`${API_ENDPOINT}/status`);
   const fastData = await data.json();
   console.log(API_ENDPOINT);
   return (
      <main>
         <div className="">{...Object.values(fastData)}</div>
      </main>
   );
}
