import { useState, useEffect } from "react";
import {
  getUser,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
} from "../service/getUser";
import { getData } from "./config";
import { USER_MAIN_DATA } from "./mockData";
import { USER_ACTIVITY } from "./mockData";
import { USER_AVERAGE_SESSIONS } from "./mockData";
import { USER_PERFORMANCE } from "./mockData";
import { useNavigate } from "react-router-dom";

/**
 * @function useFetchingData Get Api datas of user: user information, user activity, user average session, user performance
 * @param {number} userId Id of the user
 * @param {object} USER_MAIN_DATA Mock data of user
 * @param {object} USER_ACTIVITY Mock data of user activity
 * @param {object} USER_AVERAGE_SESSIONS Mock data of user average session
 * @param {object} USER_PERFORMANCE Mock data of user performance
 */

function useFetchingData(userId) {
  const navigate = useNavigate();
  /**
   * informations datas of user
   */
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (getData === "api") {
      getUser(userId)
        .then((res) => {
          console.log(res);
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/error");
        });
    } else {
      const dataUser = USER_MAIN_DATA.find((user) => {
        return user.id == userId.id;
      });

      if (!dataUser) {
        navigate("/error");
      }

      const datas = { data: dataUser };
      setUser(datas);
    }
  }, []);

  const userData = user.data;

  /**
   * activity datas of user
   */
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    if (getData === "api") {
      getUserActivity(userId)
        .then((res) => {
          console.log(res);
          setActivity(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/error");
        });
    } else {
      const dataActivity = USER_ACTIVITY.find((user) => {
        return user.userId == userId.id;
      });

      if (!dataActivity) {
        navigate("/error");
      }

      const datas = { data: dataActivity };
      setActivity(datas);
    }
  }, []);

  const activityData = activity.data;

  /**
   * average sessions datas of user
   */
  const [averageSessions, setAverageSessions] = useState([]);

  useEffect(() => {
    if (getData === "api") {
      getUserAverageSession(userId)
        .then((res) => {
          console.log(res);
          setAverageSessions(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/error");
        });
    } else {
      const dataAverageSessions = USER_AVERAGE_SESSIONS.find((user) => {
        return user.userId == userId.id;
      });

      if (!dataAverageSessions) {
        navigate("/error");
      }

      const datas = { data: dataAverageSessions };
      setAverageSessions(datas);
    }
  }, []);

  const averageSessionsData = averageSessions.data;

  /**
   * performance datas of user
   */
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    if (getData === "api") {
      getUserPerformance(userId)
        .then((res) => {
          console.log(res);
          setPerformance(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/error");
        });
    } else {
      const dataPerformance = USER_PERFORMANCE.find((user) => {
        return user.userId == userId.id;
      });

      if (!dataPerformance) {
        navigate("/error");
      }

      const datas = { data: dataPerformance };
      setPerformance(datas);
    }
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
