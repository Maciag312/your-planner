const initialState = {
  day: "",
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

const date = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default date;
