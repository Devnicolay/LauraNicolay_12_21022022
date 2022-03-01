import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
];
const data = [
  { name: "score", value: USER_MAIN_DATA[0].todayScore },
  { name: "total", value: 1 - USER_MAIN_DATA[0].todayScore },
];

// const data = [
//   {
//     name: "todayScore",
//     todayScore: 1 - USER_MAIN_DATA[0].todayScore,
//     fill: "#FBFBFB",
//   },
//   {
//     name: "todayScore",
//     todayScore: USER_MAIN_DATA[0].todayScore,
//     fill: "#E60000",
//     stroke: "#E60000",
//   },
// ];

function Score() {
  return (
    <div className="container-score">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
          {/* <Pie
            data={USER_MAIN_DATA[0]}
            nameKey={"name"}
            cx={120}
            cy={200}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="todayScore"
            startAngle={-180}
            endAngle={180}
            innerRadius={60}
            outerRadius={60}
          >
            <Cell fill={"#e60000"} />
          </Pie> */}
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
        <p className="pourcent">{USER_MAIN_DATA[0].todayScore * 100} %</p>
        <p className="text-legend">de votre</p>
        <p className="text-legend">objectif</p>
      </div>
    </div>
  );
}

function CustomLegend({ payload }) {
  console.log(payload);
  if (payload) {
    return (
      <div className="legend">
        {/* <p className="pourcent">{`${payload[0].todayScore}`} %</p> */}
        <p className="text-legend">de votre</p>
        <p className="text-legend">objectif</p>
      </div>
    );
  }
}

export default Score;
