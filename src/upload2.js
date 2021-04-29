import React, { Component } from "react";
import "./upload2.css";
import { Card } from "react-bootstrap";
import { AuthCluster } from "./pages/auth-cluster";

class Upload2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    return (
      <div>
        <div className="card border-0">
          <div className="card-header">
            <div class="container">
              <div className="row no-gutters">
                <div className="col-6">
                  <p>Admin Panel</p>
                </div>
                <div className="col-6">
                  <div>
                    <AuthCluster />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div class="container">
              <div className="row no-gutters">
                <div className="col-12">
                  <h5 className="card-title">Upload File</h5>
                  <p className="card-text">
                    <div className="input-group mb-3">
                      <div className="custom-file">
                        <input type="file" onChange={this.handleChange} />
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-12">
                <div>
                  <Card className="border-0 p-2">
                    <Card.Img src={this.state.file} alt="" />
                  </Card>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-12">
                <a href="#" className="btn btn-primary" alt=" ">
                  Mint
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload2;

/*
           <h5 className="card-title">Upload File</h5>
            <p className="card-text">
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input type="file" onChange={this.handleChange} />
                </div>
              </div>
            </p>

 */
