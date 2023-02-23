import React, {Component} from 'react';
import Link from 'next/link';


class Navbar extends Component {
  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" href="#">
              RAD Padel Leaderboard
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/add-result">
                  <a className="nav-link active" aria-current="page">Add Result</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar