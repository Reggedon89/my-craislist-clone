import store from "../store";
import axios from "axios";

export function actionCatagory() {
  axios.get("/api/catagory").then(resp => {
    store.dispatch({
      type: "CATAGORY",
      payload: resp.data.categories
    });
  });
}
export function matchListings(slug) {
  axios.get("/api/listings/" + slug).then(resp => {
    console.log(resp.data);
    store.dispatch({
      type: "LISTINGS",
      payload: resp.data
    });
  });
}
export function sendPost(title, description, slug) {
  axios.post("/api/post", { title, description, slug }).then(resp => {
    matchListings(slug);
  });
}
