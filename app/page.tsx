// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-200 to-pink-200 flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-center text-blue-800">
//         Tailwind CSS is Working!
//       </h1>
//     </div>
//   );
// }


import SalesChart from "@/components/organisms/SalesChart";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* Wrap SalesChart in a div */}
      <div className="w-full">
        <SalesChart />
      </div>
    </main>
  );
}
