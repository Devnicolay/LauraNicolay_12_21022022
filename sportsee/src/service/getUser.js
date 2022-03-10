import axios from "axios";

/**
 *
 * @param {number} userId if of user
 * @returns response of data
 */

export const getUser = (userId) => {
  return axios.get(`http://localhost:3000/user/${userId.id}`).then((res) => {
    return res.data;
  });
};

export const getUserActivity = (userId) => {
  return axios
    .get(`http://localhost:3000/user/${userId.id}/activity`)
    .then((res) => {
      return res.data;
    });
};

export const getUserAverageSession = (userId) => {
  return axios
    .get(`http://localhost:3000/user/${userId.id}/average-sessions`)
    .then((res) => {
      return res.data;
    });
};

export const getUserPerformance = (userId) => {
  return axios
    .get(`http://localhost:3000/user/${userId.id}/performance`)
    .then((res) => {
      return res.data;
    });
};
