const initialState = {
  allTasks: [
    {
      id: 100,
      initialDuration: 15000,
      durationLeft: 15000,
      completed: true,
      title: "first task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: false,
    },
    {
      id: 101,
      initialDuration: 15000,
      durationLeft: 1500,
      completed: false,
      title: "second task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: true,
    },
    {
      id: 102,
      initialDuration: 15000,
      durationLeft: 15000,
      completed: false,
      title: "third task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: false,
    },
    {
      id: 103,
      initialDuration: 190000,
      durationLeft: 190000,
      completed: false,
      title: "fourth task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: true,
    },
  ],

  chosenTask: {
    id: 1,
    initialDuration: 15000,
    durationLeft: 15000,
    date: 123,
    isDone: false,
    name: "second task",
    category: "",
    isRunning: false,
    date: "31 Aug 2020",
    isTimeLimited: true,
  }
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        allTasks: state.allTasks.concat({
          title: action.text,
          completed: false,
          id: action.id,
          category: action.category,
          isRunning: false,
          duration: 20,
          date: "11 Sep 2020",
        }),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        allTasks: state.allTasks.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case "REMOVE_TASK":
      return {
        ...state,
        allTasks: state.allTasks.filter((todo) => todo.id !== action.id),
      };

    case "SET_CHOSEN_TASK":
      return {
        ...state,
        chosenTask: state.chosenTask,
      };

    default:
      return state;
  }
};

export default todos;
