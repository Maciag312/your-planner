const initialState = {
  allCategories: [
    { label: "Sport", value: "sport" },
    { label: "Spare time", value: "spare-time" },
    { label: "Culture", value: "culture" },
    { label: "Work", value: "work" },
    { label: "Self development", value: "self-development" },
    { label: "Family", value: "family" },
  ],
};
let categoryID = 0;

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOM_CATEGORY":
      return {
        ...state,
        allCategories: state.allCategories.concat({
          label: action.label,
          value: categoryID++,
        }),
      };
    default:
      return state;
  }
};

export default categories;
