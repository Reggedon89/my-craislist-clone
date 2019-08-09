const initialState = {
  categories: []
  // community: [],
  // housing: [],
  // job: [],
  // services: [],
  // forSale: [],
  // personals: [],
  // gigs: [],
  // resumes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "CATAGORY":
      return { ...state, categories: action.payload };
    // case "SUBCATEGORIES":
    //   return {
    //     ...state,
    //     community: action.community,
    //     housing: action.housing,
    //     job: action.job,
    //     services: action.services,
    //     forSale: action.forSale,
    //     personals: action.personals,
    //     gigs: action.gigs,
    //     resumes: action.resumes
    //   };

    default:
      return state;
  }
}
