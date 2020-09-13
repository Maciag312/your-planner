const initialState = {
  allTasks: [
    {
      id: 100,
      duration: 123,
      completed: true,
      title: "first task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: false,
    },
    {
      id: 101,
      duration: 123,
      completed: false,
      title: "second task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: true,
    },
    {
      id: 102,
      duration: 123,
      completed: false,
      title: "third task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: false,
    },
    {
      id: 103,
      duration: 123,
      completed: false,
      title: "fourth task",
      category: "",
      isRunning: false,
      date: "11 Sep 2020",
      isTimeLimited: false,
    },
  ],

  chosenTask: {}
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
