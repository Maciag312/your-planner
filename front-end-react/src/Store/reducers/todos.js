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
      date: "17 Oct 2020",
      isTimeLimited: false,
    },
    {
      id: 101,
      initialDuration: 15000,
      durationLeft: 15000,
      completed: false,
      title: "second task",
      category: "",
      isRunning: false,
      date: "17 Oct 2020",
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
      date: "17 Oct 2020",
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
      date: "17 Oct 2020",
      isTimeLimited: true,
    },
  ],

  chosenTask: {
    id: 101,
    initialDuration: 15000,
    durationLeft: 5000,
    completed: false,
    title: "second task",
    category: "",
    isRunning: false,
    date: "17 Oct 2020",
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
          duration: action.duration,
          isTimeLimited: action.isTimeLimited,
          date: action.date,
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

    case "ALTER_TASK":
      return {
        ...state,
        allTasks: function() {
          let index = state.allTasks.map(t=>t.id).indexOf(action.task.id)
          if(index<0) return state.allTasks
          let tasks = state.allTasks;
          tasks[index] = action.task;
          return tasks; 
        }
      }

    case "SET_CHOSEN_TASK":
      return {
        ...state,
        chosenTask: action.chosenTask,
      };

    default:
      return state;
  }
};

export default todos;
