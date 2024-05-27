import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";

function KpiCard({ title, value, change }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  );
}

export default KpiCard;
