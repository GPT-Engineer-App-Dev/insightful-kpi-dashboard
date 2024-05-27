import KpiCard from "./KpiCard.jsx";
import OkrCard from "./OkrCard.jsx";

function Dashboard() {
  const kpis = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
    { title: "Subscriptions", value: "+2350", change: "+180.1% from last month" },
    { title: "Sales", value: "+12,234", change: "+19% from last month" },
    { title: "Active Now", value: "+573", change: "+201 since last hour" },
  ];

  const okrs = [
    { title: "Increase Market Share", description: "Expand into new markets and increase market share by 10%." },
    { title: "Improve Customer Satisfaction", description: "Achieve a customer satisfaction score of 90% or higher." },
    { title: "Launch New Product", description: "Successfully launch the new product by Q3." },
    { title: "Reduce Operational Costs", description: "Reduce operational costs by 15% through process improvements." },
  ];

  return (
    <div className="space-y-4 p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <KpiCard key={index} title={kpi.title} value={kpi.value} change={kpi.change} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {okrs.map((okr, index) => (
          <OkrCard key={index} title={okr.title} description={okr.description} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
