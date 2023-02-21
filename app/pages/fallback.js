import React, {Component, useEffect} from 'react';
import BookingCard from "../components/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import { useRouter } from 'next/router'

const FallbackWithRouter = (props) => {
  const router = useRouter()
  return <Fallback {...props} router={router} />
}

class Fallback extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookings: []
    }
  }
  // componentDidMount = () => {
  //   if ("serviceWorker" in navigator) {
  //         window.addEventListener("load", function () {
  //           navigator.serviceWorker.register("/sw-offline.js").then(
  //             function (registration) {
  //               console.log(
  //                 "Service Worker registration successful with scope: ",
  //                 registration.scope
  //               );
  //             },
  //             function (err) {
  //               console.log("Service Worker registration failed: ", err);
  //             }
  //           );
  //         });
  //       }
  //     // this.props.findAll().then(bookings => this.setState({bookings: bookings}))
  //     }

  // componentWillMount() {
  //   console.log("DID MOUNT")
  //   const bookings = JSON.parse(localStorage.getItem("bookings")) || []
  //   console.log(this.state.bookings)
  //   console.log(localStorage.getItem("bookings"))
  //   if ((bookings.length !== this.state.bookings.length) || (localStorage.getItem("updateBookings"))) {
  //     console.log('updating state')
  //     this.setState({bookings: bookings})
  //     localStorage.setItem("updateBookings", "")
  //     localStorage.setItem("updatePlayers", true)
  //   }
  // }
  componentDidMount(){
    console.log("DID MOUNT")
    const bookings = JSON.parse(localStorage.getItem("bookings")) || []
    console.log(JSON.parse(localStorage.getItem("bookings")))
    console.log('updating state')
    this.setState({bookings: bookings})
    localStorage.setItem("updatePlayers", true)
    // if ((bookings.length !== this.state.bookings.length) || (localStorage.getItem("updateBookings"))) {
    //   console.log('updating state')
    //   this.setState({bookings: bookings})
    //   localStorage.setItem("updateBookings", "")
    //   localStorage.setItem("updatePlayers", true)
    // }
  }

  componentDidUpdate(){
    console.log("DID UPDATE")
    const bookings = JSON.parse(localStorage.getItem("bookings")) || []
    console.log(localStorage.getItem("bookings"))
    if ((bookings.length !== this.state.bookings.length) || (localStorage.getItem("updateBookings"))) {
      console.log('updating state')
      this.setState({bookings: bookings})
      localStorage.setItem("updateBookings", "")
      localStorage.setItem("updatePlayers", true)
      this.props.router.reload()
    }
  }
    
    
  render() {
    return (
      <div className="p-0">
          <h1>Welcome to homepage</h1>
        <div className="py-3 text-white text-center w-100 bg-dark">
          <p>A PWA Web App built on Next.js</p>
        </div>
        <CardGroup>
        {Array.isArray(this.state.bookings) ? (this.state.bookings.map((b,index) => (
            <BookingCard players={b.players} index={index} key={b.bookingId} booking={b} pitchId={b.pitchId} startTime={b.startTime} playersCount={b.playersCount}/>
        ))):null}
        </CardGroup>
      </div>
    );
  }
}

export default FallbackWithRouter;


// export default function Home(props) {
//   const [bookings, setBookings] = React.useState([])

//   console.log(props)
  // useEffect(() => {
  //   console.log("yooo")
  //   const getBookings = async () => {
  //     bookings = await props.findAll()
  //     setBookings(bookings)
  //   }
  //   getBookings().catch(console.error)
  //   console.log(bookings)
  // })
//   return (
//     <div className="p-0">
//            <h1>Welcome to homepage</h1>
//          <div className="py-3 text-white text-center w-100 bg-dark">
//            <p>A PWA Web App built on Next.js</p>
//          </div>
//          <CardGroup>
//          {Array.isArray(props.bookings) ? (props.bookings.map((b,index) => (
//             <BookingCard players={b.players} index={index} key={b.bookingId} booking={b} pitchId={b.pitchId} startTime={b.startTime} playersCount={b.playersCount}/>
//         ))):null}
//         </CardGroup>
//       </div>
//   )
// }