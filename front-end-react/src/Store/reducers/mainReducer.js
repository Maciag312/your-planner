const initialState = {
  day: 0,
  info: "21",
  authenticated: false,
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'NEXT_DAY': 
        return {
              ...state,
              day: state.day+1
          }
    
        case 'PREVIOUS_DAY':
            return {
                ...state,
                day: state.day-1
            }
        case 'SET_AUTHENTICATION':
          return {
            ...state,
            authenticated: action.authenticated
          }

      default:
        return state
    }
  }
  
  export default mainReducer
  