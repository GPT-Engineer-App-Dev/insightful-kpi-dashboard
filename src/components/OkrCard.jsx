import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";

function OkrCard({ title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

export default OkrCard;
