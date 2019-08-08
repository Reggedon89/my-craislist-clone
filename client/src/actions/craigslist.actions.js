import store from "../store";
import axios from "axios";

export function actionCatagory() {
  axios.get("/api/catagory").then(resp => {
    store.dispatch({
      type: "CATAGORY",
      payload: resp.data
    });
  });
}

export function getSubCategories() {
  const community = [];
  const housing = [];
  const job = [];
  const services = [];
  const forSale = [];
  const personals = [];
  const gigs = [];
  const resumes = [];
  axios.get("/api/subcatagory").then(resp => {
    resp.data.forEach(item => {
      if (item.parent_id === 1) {
        community.push(item);
      } else if (item.parent_id === 2) {
        housing.push(item);
      } else if (item.parent_id === 3) {
        job.push(item);
      } else if (item.parent_id === 4) {
        services.push(item);
      } else if (item.parent_id === 5) {
        forSale.push(item);
      } else if (item.parent_id === 122) {
        personals.push(item);
      } else if (item.parent_id === 123) {
        gigs.push(item);
      } else if (item.parent_id === 139) {
        resumes.push(item);
      }
    });
    store.dispatch({
      type: "SUBCATEGORIES",
      community: community,
      housing: housing,
      job: job,
      services: services,
      forSale: forSale,
      personals: personals,
      gigs: gigs,
      resumes: resumes
    });
  });
}
