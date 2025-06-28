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
