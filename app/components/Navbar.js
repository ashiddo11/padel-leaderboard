import React, {Component} from 'react';
import Link from 'next/link';
import {useRef} from 'react';

// class Navbar extends Component {

export const Navbar = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  function collapseNav() {
    navButton.current.classList.add('collapsed');
    linksContainerRef.current.classList.remove('show');
  }

  // render () {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link onClick={collapseNav} className="navbar-brand" href="/">
          RAD Padel Leaderboard
        </Link>
        <button
          ref={navButton}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={linksContainerRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" onClick={collapseNav} aria-current="page" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/add-result"
                onClick={collapseNav}
                aria-current="page"
                className="nav-link active"
              >
                Add Result
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
