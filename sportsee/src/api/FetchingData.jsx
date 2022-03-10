import { useState, useEffect } from "react";
import {
  getUser,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
} from "../service/getUser";

/**
 * @function useFetchingData Get datas of user: user information, user activity, user average session, user performance
 * @param {number} userId Id of the user
 */

function useFetchingData(userId) {
  /**
   * informations datas of user
   */
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(userId)
      .then((res) => {
        console.log(res);
        setUser(res);
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
    getUserActivity(userId)
      .then((res) => {
        console.log(res);
        setActivity(res);
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
    getUserAverageSession(userId)
      .then((res) => {
        console.log(res);
        setAverageSessions(res);
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
    getUserPerformance(userId)
      .then((res) => {
        console.log(res);
        setPerformance(res);
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
