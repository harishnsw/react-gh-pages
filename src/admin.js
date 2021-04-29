import React, { Component } from "react";
import { AuthCluster } from "./auth-cluster";

import UploadButton from "react-upload-button-v2";
// get our fontawesome imports
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

class Admin extends Component {
  state = {};
  handleChange(input) {
    console.log(`Uploaded File Changed: ${input.value}`);
  }

  render() {
    return (
      <div>
        <Card>
          <AuthCluster />
        </Card>
        <Card>
          <div className="btn">
            <UploadButton
              style={{ width: "10em" }}
              className="button"
              onChange={(e) => this.handleChange(e)}
            >
              <FontAwesomeIcon icon={faUpload} size="s" /> File
            </UploadButton>
          </div>
          <button class="btn btn-outline-secondary" type="button">
            Mint
          </button>
        </Card>
      </div>
    );
  }

  /*
  bottonNavBar() {
    return (      
     );
  }
  */
}

export default Admin;
