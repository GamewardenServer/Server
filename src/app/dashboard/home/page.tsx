import { Heading } from "@/components/Heading";
import StatCard from "./components/StatCard";
import { getDashboardItems } from "./page.server";

export default async function Dashboard() {
  const dashboardItems = await getDashboardItems();

  return (
    <main className="p-8 flex flex-col gap-8 w-full">
      <Heading>Welcome back, User!</Heading>
      <div className="flex flex-wrap gap-8 w-full">
        {dashboardItems.map((item) => (
          <StatCard key={item.name} name={item.name} value={item.value} />
        ))}
      </div>
    </main>
  );
}
