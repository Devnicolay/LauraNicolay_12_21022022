import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import DailyActivity from "../components/Chart/dailyActivity";
import DurationSession from "../components/Chart/durationSessions";
import Performance from "../components/Chart/performance";
import Score from "../components/Chart/score";
import Card from "../components/cards/card";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";

function Dashboard() {
  const userId = useParams();

  /**
   * informations datas of user
   */
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId.id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userData = user.data;

  /**
   * activity datas of user
   */
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId.id}/activity`)
      .then((res) => {
        console.log(res);
        setActivity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const activityData = activity.data;

  /**
   * average sessions datas of user
   */
  const [averageSessions, setAverageSessions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId.id}/average-sessions`)
      .then((res) => {
        console.log(res);
        setAverageSessions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const averageSessionsData = averageSessions.data;

  /**
   * performance datas of user
   */
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId.id}/performance`)
      .then((res) => {
        console.log(res);
        setPerformance(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const performanceData = performance.data;

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
