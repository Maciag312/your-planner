let nextTodoId = 0
export const addTask = (text,time,) => ({
  type: 'ADD_TASK',
  id: nextTodoId++,
  time,
  text
})

export const newInfo = (info) => ({
  type: 'NEW_INFO',
  info
})

export const nextDay = () => ({
    type: 'NEXT_DAY'
})

export const previousDay = () => ({
    type: 'PREVIOUS_DAY'
})


export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})