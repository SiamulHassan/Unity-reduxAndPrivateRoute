import React from "react";
import "./style.css";
import { getAuth } from "firebase/auth";
const Home = () => {
  const auth = getAuth();
  console.log("from homePage", auth.currentUser);
  return <div>This is home page</div>;
};

export default Home;
