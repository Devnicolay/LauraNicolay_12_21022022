import DailyActivity from "../components/Chart/dailyActivity";
import DurationSession from "../components/Chart/durationSessions";
import Performance from "../components/Chart/performance";
import Score from "../components/Chart/score";
import Card from "../components/cards/card";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";

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
    <div className="container-main">
      <div className="user-welcome">
        <h1>
          Bonjour <span>{USER_MAIN_DATA[0].userInfos.firstName}</span>
        </h1>
        <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="container-charts-cards">
        <div className="charts">
          <DailyActivity />
          <div className="charts-square">
            <DurationSession />
            <Performance />
            <Score />
          </div>
        </div>
        <div className="cards">
          <Card
            img={calorieIcon}
            numberUnit={USER_MAIN_DATA[0].keyData.calorieCount}
            unit={"kCal"}
            categorie={"Calories"}
          />
          <Card
            img={proteinIcon}
            numberUnit={USER_MAIN_DATA[0].keyData.proteinCount}
            unit={"g"}
            categorie={"Proteines"}
          />
          <Card
            img={carbIcon}
            numberUnit={USER_MAIN_DATA[0].keyData.carbohydrateCount}
            unit={"g"}
            categorie={"Glucides"}
          />
          <Card
            img={lipidIcon}
            numberUnit={USER_MAIN_DATA[0].keyData.lipidCount}
            unit={"g"}
            categorie={"Lipides"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
