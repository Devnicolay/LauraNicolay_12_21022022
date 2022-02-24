import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390,
      },
    ],
  },
];

function DailyActivity() {
  return (
    <div className="container-daily-activity">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer aspect={3} background="#c4c4c4">
        <BarChart
          width={500}
          height={300}
          data={USER_ACTIVITY[0].sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            tickFormatter={(day) => new Date(day).getDate()}
          />
          <YAxis
            orientation="right"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            tickCount={3}
          />
          <Tooltip content={<CustomToolTip />} />
          <Legend
            className="legend"
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="10"
            height={80}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#000000"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kcal)"
            dataKey="calories"
            fill="#ff0000"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomToolTip({ active, payload }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>{`${payload[0].value}`}kg</p>
        <p>{`${payload[1].value}`}kcal</p>
      </div>
    );
  }
  return null;
}

export default DailyActivity;
