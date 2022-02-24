import DailyActivity from "../components/Chart/dailyActivity";
import DurationSession from "../components/Chart/durationSessions";

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

function Home() {
  return (
    <div>
      <div className="user-welcome">
        <h1>
          Bonjour <span>{USER_MAIN_DATA[0].userInfos.firstName}</span>
        </h1>
        <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="charts">
        <DailyActivity />
        <DurationSession />
      </div>
    </div>
  );
}

export default Home;
