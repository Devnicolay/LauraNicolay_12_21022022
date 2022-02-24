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

function dayWeek() {
  USER_AVERAGE_SESSIONS[0].sessions.map((session) => {
    if (session.day === 1) {
      return { nameDay: "L" };
    } else if (session.day === 2) {
      return { nameDay: "M" };
    } else if (session.day === 3) {
      return { nameDay: "M" };
    } else if (session.day === 4) {
      return { nameDay: "J" };
    } else if (session.day === 5) {
      return { nameDay: "V" };
    } else if (session.day === 6) {
      return { nameDay: "S" };
    } else if (session.day === 7) {
      return { nameDay: "D" };
    }
  });
}

function DurationSession() {
  return (
    <div className="container-duration-sessions">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer aspect={3}>
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
            tick={{ fill: "#FFFFFF" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={"L"}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DurationSession;
