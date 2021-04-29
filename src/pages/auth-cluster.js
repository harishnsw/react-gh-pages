import React, { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import { Button, Card } from "react-bootstrap";

export function AuthCluster() {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser().subscribe(setUser), []);

  if (user.loggedIn) {
    return (
      <div>
        <span>{user?.addr ?? "No Address"}</span>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          onClick={fcl.unauthenticate}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          type="button"
          class="btn btn-outline-Light btn-sm"
          onClick={fcl.logIn}
        >
          Login
        </button>
        <button
          type="button"
          class="btn btn-outline-Light btn-sm"
          onClick={fcl.signUp}
        >
          SignUp
        </button>
      </div>
    );
  }
}
