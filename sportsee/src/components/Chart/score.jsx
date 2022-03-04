import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Score({ dataUser }) {
  const score = dataUser && dataUser.todayScore;
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
            paddingAngle={5}
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
        <p className="pourcent">{dataUser && dataUser.todayScore * 100} %</p>
        <p className="text-legend">de votre</p>
        <p className="text-legend">objectif</p>
      </div>
    </div>
  );
}

export default Score;
