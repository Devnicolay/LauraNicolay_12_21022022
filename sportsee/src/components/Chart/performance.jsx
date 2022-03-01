import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
];

function Performance() {
  return (
    <div className="container-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={USER_PERFORMANCE[0].data}
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

const dataKind = USER_PERFORMANCE[0].kind;
const formattedKind = (type) => dataKind[type];

export default Performance;
