import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {Component} from 'react';
import Link from 'next/link';




class BookingCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      booking: this.props.booking
    }
  }
  render() {
    console.log(this.props)
    return (
      <Card className="text-center">
        <Card.Header>Pitch: {this.props.booking.pitchId}</Card.Header>
        <Card.Body>
          <Card.Title>Start Time: {this.props.startTime}</Card.Title>
          <Card.Text>
            Player Count: {this.props.booking.playersCount}
          </Card.Text>
          <Link href={{pathname:"/booking",query:{
            ...this.props.booking, index: this.props.index
          }}}>
            <Button variant="primary" color="secondary">Open Booking</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default BookingCard;