import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  },
];

function DurationSession() {
  return (
    <div className="container-duration-sessions">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={100}
          data={USER_AVERAGE_SESSIONS[0].sessions}
        >
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
          />
          <XAxis
            dataKey="day"
            tick={{ fill: "#FFFFFF", dx: 20 }}
            tickLine={false}
            axisLine={false}
            tickMargin={0}
            tickFormatter={formattedDay}
            // padding={{ left: 10, right: 10 }}
          />
          <YAxis hide domain={["dataMin-10", "dataMax+20"]} />
          <Tooltip content={<CustomToolTip />} cursor={<CustomHover />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            activeDot={{
              background: "#FFFFFF",
              stroke: "rgba(255, 255, 255, 0.3)",
              strokeWidth: 10,
              r: 4,
            }}
            dot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const dayOfWeek = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
const formattedDay = (day) => dayOfWeek[day];

function CustomToolTip({ active, payload }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>{`${payload[0].value}`} min</p>
      </div>
    );
  }
  return null;
}

const CustomHover = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y="0"
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

export default DurationSession;
