import React, { Component } from "react";
import _ from "lodash";
import { Card } from "react-bootstrap";

class Album extends Component {
  state = {
    cells: 9,
    image: "https://picsum.photos/200/200",
  };

  render() {
    let mints = {};
    mints["1"] = {
      set: 1,
      product: "Cigar1",
      owner: "Admin",
      path: "/assests/image/cig1.png",
    };

    return (
      <React.Fragment>
        {this.createAlbumCell()}
        {/* {this.bottonNavBar()} */}
      </React.Fragment>
    );
  }

  createAlbumCell() {
    return (
      <main>
        <div className="album py-1 bg-light">
          <div className="container-fluid">
            <div className="row row-cols-3 row-cols-sm-3 row-cols-sm-3 g-1">
              {_.range(this.state.cells).map((c) => {
                console.log(c);
                return this.createCell();
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }

  createCell() {
    return (
      <Card>
        <Card.Img src={this.state.image} alt="" />
      </Card>

      /* {
      <div className="col">
        <div>
          <img src="https://dog.ceo/api/breeds/image/random" />
        </div>
      </div>
     }
    */
    );
  }

  bottonNavBar() {
    return (
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          .
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Album;
