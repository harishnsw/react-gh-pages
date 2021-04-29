import React from "react";
//import Admin from "./admin";
import { AuthCluster } from "./pages/auth-cluster";
import Album from "./pages/album";

export default function App() {
  return (
    <div>
      <AuthCluster />
      <Album />
    </div>
  );
}

/*
import Upload2 from "./upload2";
export default function App() {
  return (
    <div>
      <Upload2></Upload2>
    </div>
  );
}

      <div className="card">
        <div className="card-body">
          <img src={logo} alt=" " />
        </div>
      </div>

*/
