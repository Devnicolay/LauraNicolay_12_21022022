import { useState, useEffect } from "react";
import axios from "axios";

function useFetchingData(userId) {
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

  return {
    userData,
    activityData,
    averageSessionsData,
    performanceData,
  };
}

export default useFetchingData;
