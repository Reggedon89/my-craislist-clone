import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  actionCatagory,
  getSubCategories
} from "../actions/craigslist.actions";

export default props => {
  const mainCatagories = useSelector(appState => appState.parentCatagory);
  const community = useSelector(appState => appState.community);
  const housing = useSelector(appState => appState.housing);
  const job = useSelector(appState => appState.job);
  const services = useSelector(appState => appState.services);
  const forSale = useSelector(appState => appState.forSale);
  const personals = useSelector(appState => appState.personals);
  const gigs = useSelector(appState => appState.gigs);
  const resumes = useSelector(appState => appState.resumes);
  console.log(community);
  useEffect(() => {
    actionCatagory();
    getSubCategories();
  }, []);
  return (
    <div className="home-wrapper">
      <h1>Hello</h1>
      <ul>
        {mainCatagories.map(item => {
          switch (item.name) {
            case "community":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {community.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            case "housing":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {housing.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            case "jobs":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {job.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            case "services":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {services.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            case "forSale":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {forSale.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            case "personals":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {personals.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            case "gigs":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {gigs.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            case "resumes":
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  {resumes.map(sub => {
                    return (
                      <Link to={sub.name} key={sub.name}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              );
            default:
          }
        })}
      </ul>
    </div>
  );
};
