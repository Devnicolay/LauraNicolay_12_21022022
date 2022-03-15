import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 *
 * @param {object} dataUser data of user
 * @returns pie chart of user goal
 */

function Score({ dataUser }) {
  const score = dataUser.todayScore;
  const data = [
    { name: "score", value: score },
    { name: "total", value: 1 - score },
  ];

  return (
    <div className="container-score">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            startAngle={90}
            endAngle={450}
            innerRadius={88}
            outerRadius={100}
            cornerRadius={10}
            dataKey="value"
          >
            <Cell fill={"#e60000"} />
            <Cell fill={"transparent"} stroke={"transparent"} />
          </Pie>
          <Pie
            outerRadius={85}
            fill={"#FFFFFF"}
            data={[{ name: "background", value: 100 }]}
            dataKey="value"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="legend">
        <p className="pourcent">{dataUser.todayScore * 100} %</p>
        <p className="text-legend">de votre</p>
        <p className="text-legend">objectif</p>
      </div>
    </div>
  );
}

Score.propTypes = {
  dataUser: PropTypes.object,
  data: PropTypes.array,
};

export default Score;
