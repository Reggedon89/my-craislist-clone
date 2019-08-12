const initialState = {
  categories: [],
  listings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "CATAGORY":
      return { ...state, categories: action.payload };

    case "LISTINGS":
      return { ...state, listings: action.payload };
    default:
      return state;
  }
}
