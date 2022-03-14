import { useState, useEffect } from "react";
import {
  getUser,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
} from "../service/getUser";
import { USER_MAIN_DATA } from "./mockData";
import { USER_ACTIVITY } from "./mockData";
import { USER_AVERAGE_SESSIONS } from "./mockData";
import { USER_PERFORMANCE } from "./mockData";

/**
 * @function useFetchingData Get Api datas of user: user information, user activity, user average session, user performance
 * @param {number} userId Id of the user
 * @param {object} USER_MAIN_DATA Mock data of user
 * @param {object} USER_ACTIVITY Mock data of user activity
 * @param {object} USER_AVERAGE_SESSIONS Mock data of user average session
 * @param {object} USER_PERFORMANCE Mock data of user performance
 */

function useFetchingData(userId) {
  /**
   * informations datas of user
   */
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(userId)
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          setUser(res);
        } else {
          setUser(USER_MAIN_DATA);
        }
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
        if (!res.ok) {
          console.log(res);
          setActivity(res);
        } else {
          setActivity(USER_ACTIVITY);
        }
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
        if (!res.ok) {
          console.log(res);
          setAverageSessions(res);
        } else {
          setAverageSessions(USER_AVERAGE_SESSIONS);
        }
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
        if (!res.ok) {
          console.log(res);
          setPerformance(res);
        } else {
          setPerformance(USER_PERFORMANCE);
        }
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
