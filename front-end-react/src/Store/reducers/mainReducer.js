const initialState = {
  day: 0,
  info: "21",
  authenticated: false,

  categories: [
    { label: "Sport", value: "sport" },
    { label: "Education", value: "education" },
    { label: "Culture", value: "culture" },
    { label: "Leasure Time", value: "leasure" },
    { label: "Health", value: "health" },
  ],

  tasks: [
    {
      duration: 123,
      date: 312,
      isDone: true,
      name: "first task",
      category: "",
      date: "31-Aug-2020",
      isTimeLimited: false
    },
    {
      duration: 123,
      date: 123,
      isDone: false,
      name: "second task",
      category: "",
      date: "31-Aug-2020",
      isTimeLimited: true
    },
    {
      duration: 123,
      date: 312,
      isDone: false,
      name: "third task",
      category: "",
      date: "30-Aug-2020",
      isTimeLimited: false
    },
  ],
  jwt: "",
  chosenTask: {}

};

const addDays = (d, days) => {
  console.log(d);
  var date = new Date(Date.parse(d));
  console.log(date);
  date.setDate(date.getDate() + days);
  console.log(date);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${da} ${mo} ${ye}`;
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_DAY":
      return {
        ...state,
        day: addDays(state.day, 1),
      };

    case "PREVIOUS_DAY":
      return {
        ...state,
        day: addDays(state.day, -1),
      };
    case "SET_DAY":
      return {
        ...state,
        day: action.day,
      };
    case "SET_AUTHENTICATION":
      return {
        ...state,
        authenticated: action.authenticated,
      };
    case "SET_JWT":
      return {
        ...state,
        jwt: action.jwt,
      };

      case "TASK_CHOSEN": 
      return {
        ...state,
        chosenTask: action.task
      };

    default:
      return state;
  }
};

export default mainReducer;
