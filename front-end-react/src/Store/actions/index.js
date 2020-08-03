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
