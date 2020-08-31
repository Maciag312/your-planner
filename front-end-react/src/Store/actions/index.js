export const nextDay = () => ({
  type: "NEXT_DAY",
});

export const previousDay = () => ({
  type: "PREVIOUS_DAY",
});
export const setAuthentication = (authenticated) => ({
  type: "SET_AUTHENTICATION",
  authenticated,
});
export const setJwt = (jwt) => ({
  type: "SET_JWT",
  jwt,
});

export const setDay = (day) => ({
  type: "SET_DAY",
  day,
});

export const setChosenTask = (task) => {
  return {
    type: "TASK_CHOSEN",
    task
  };
};
