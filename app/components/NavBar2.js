import React, {Component} from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';


class Navbar2 extends Component {
  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Navbar.Collape id="responsive=navbar=nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar.Collape>
          </Navbar.Toggle>
        </Container>
      </Navbar>
      // <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      //   <div className="container-fluid">
      //     <Link href="/">
      //       <a className="navbar-brand" href="#">
      //         Payment Tracker
      //       </a>
      //     </Link>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-bs-toggle="collapse"
      //       data-bs-target="#navbarTogglerDemo02"
      //       aria-controls="navbarTogglerDemo02"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      //         <li className="nav-item">
      //           <Link href="/">
      //             <a className="nav-link active" aria-current="page">Home</a>
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link href="/add-booking">
      //             <a className="nav-link active" aria-current="page">Add Booking</a>
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <button style={{backgroundColor: "red"}} type="button" onClick={() => {this.props.nukeDB()}} className="btn btn-secondary">RECREATE ALL BOOKINGS!!!</button>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Navbar2