import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DailyActivity({ dataActivity }) {
  return (
    <div className="container-daily-activity">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%" background="#c4c4c4">
        <BarChart
          width={500}
          height={300}
          data={dataActivity && dataActivity.sessions}
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
            dataKey="kilogram"
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-3", "dataMax+3"]}
            tickCount={4}
          />
          <YAxis
            hide
            dataKey="calories"
            yAxisId="calories"
            orientation="right"
            domain={[0, "dataMax+5"]}
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
            yAxisId="kilogram"
            fill="#000000"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kcal)"
            dataKey="calories"
            yAxisId="calories"
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
        <p>{`${payload && payload[0].value}`}kg</p>
        <p>{`${payload && payload[1].value}`}kcal</p>
      </div>
    );
  }
  return null;
}

export default DailyActivity;
