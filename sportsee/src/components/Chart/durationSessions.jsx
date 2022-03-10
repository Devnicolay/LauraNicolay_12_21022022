import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 *
 * @param {object} dataAverageSessions data of user average session
 * @returns line chart of average duration of sessions
 */

function DurationSession({ dataAverageSessions }) {
  return (
    <div className="container-duration-sessions">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={dataAverageSessions.sessions}>
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

DurationSession.propTypes = {
  dataAverageSessions: PropTypes.object,
};

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

CustomHover.propTypes = {
  points: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default DurationSession;
