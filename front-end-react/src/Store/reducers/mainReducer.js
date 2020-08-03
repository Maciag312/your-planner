const initialState = {
  day: 0,
  info: "21",
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

      default:
        return state
    }
  }
  
  export default mainReducer
  