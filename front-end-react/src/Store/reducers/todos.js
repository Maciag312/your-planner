const initialState = {
  allTasks: [
    
  ],

  chosenTask: {
    
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
