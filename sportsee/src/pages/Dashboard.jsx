import { useParams } from "react-router-dom";
import React from "react";
import useFetchingData from "../api/FetchingData";

import DailyActivity from "../components/Chart/dailyActivity";
import DurationSession from "../components/Chart/durationSessions";
import Performance from "../components/Chart/performance";
import Score from "../components/Chart/score";
import Card from "../components/cards/card";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";

/**
 * @param {number} userId id of user taken from url
 * @param {object} userData data of user
 * @param {object} activityData data of user activity
 * @param {object} dataAverageSessions data of user average session
 * @param {object} performanceData data of user performance
 * @returns dashboard of user with component for charts
 */

function Dashboard() {
  const userId = useParams();

  const { userData, activityData, averageSessionsData, performanceData } =
    useFetchingData(userId);

  return (
    <div className="container-main">
      <div className="user-welcome">
        <h1>
          Bonjour <span>{userData && userData.userInfos.firstName}</span>
        </h1>
        <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="container-charts-cards">
        <div className="charts">
          {activityData && <DailyActivity dataActivity={activityData} />}
          <div className="charts-square">
            {averageSessionsData && (
              <DurationSession dataAverageSessions={averageSessionsData} />
            )}
            {performanceData && (
              <Performance dataPerformance={performanceData} />
            )}
            {userData && <Score dataUser={userData} />}
          </div>
        </div>
        <div className="cards">
          <Card
            img={calorieIcon}
            numberUnit={userData && userData.keyData.calorieCount}
            unit={"kCal"}
            categorie={"Calories"}
          />
          <Card
            img={proteinIcon}
            numberUnit={userData && userData.keyData.proteinCount}
            unit={"g"}
            categorie={"Proteines"}
          />
          <Card
            img={carbIcon}
            numberUnit={userData && userData.keyData.carbohydrateCount}
            unit={"g"}
            categorie={"Glucides"}
          />
          <Card
            img={lipidIcon}
            numberUnit={userData && userData.keyData.lipidCount}
            unit={"g"}
            categorie={"Lipides"}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
