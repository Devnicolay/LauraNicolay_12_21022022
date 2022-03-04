import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function Performance({ dataPerformance }) {
  const dataKind = dataPerformance.kind;
  const formattedKind = (type) => dataKind[type];

  return (
    <div className="container-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={dataPerformance.data}
          height={200}
          margin={{ top: 0, right: 25, bottom: 0, left: 25 }}
          startAngle={30}
          endAngle={-330}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formattedKind}
            tick={{ fill: "#FFFFFF", fontSize: "12px" }}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
