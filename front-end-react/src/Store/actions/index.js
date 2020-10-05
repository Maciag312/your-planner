let nextTaskId = 0;

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

export const setChosenTask = (chosenTask) => {
  return {
    type: "SET_CHOSEN_TASK",
    chosenTask,
  };
};

export const addTask = (text, category) => {
  return {
    type: "ADD_TASK",
    id: nextTaskId++,
    text,
    category,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    id,
  };
};

export const addCategory = (label) => {
  return {
    type: "ADD_CUSTOM_CATEGORY",
    label,
  };
};

export const removeCategory = (value) => {
  return {
    type: "REMOVE_CUSTOM_CATEGORY",
    value,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
};

export const alterTask = (task) => {
  return {
    type: "ALTER_TASK",
    task,
  };
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
