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

// export const playChosenTask = (date) => {
//   return {
//     type: "PLAY_CHOSEN_TASK",
//     date
//   };
// };

// export const completeChosenTask = (date) => {
//   return {
//     type: "COMPLETE_CHOSEN_TASK",
//   };
// };

// export const repeatChosenTask = () => {
//   return {
//     type: "REPEAT_CHOSEN_TASK",
//   };
// };

// export const breakChosenTask = (date) => {
//   return {
//     type: "BREAK_CHOSEN_TASK",
//   };
// };
