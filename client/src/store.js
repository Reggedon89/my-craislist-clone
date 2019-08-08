import { createStore } from "redux";

import Reducer from "./reducers/craigslist.reducer";

const store = createStore(Reducer);

export default store;
