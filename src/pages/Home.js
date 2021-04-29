import React from "react";
import { AuthCluster } from "./auth-cluster";
import Album from "./album";

const Home = (props) => {
  return (
    <div>
      <AuthCluster />
      <Album />
    </div>
  );
};

export default Home;
