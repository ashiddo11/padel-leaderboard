import React, {Component, useEffect} from 'react';
import BookingCard from "../components/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import { useRouter } from 'next/router'
import BootstrapTable from 'react-bootstrap-table-next';

const HomeWithRouter = (props) => {
  const router = useRouter()
  return <Home {...props} router={router} />
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookings: []
    }
  }
  
  
  componentDidMount = async () => {
    var bookings = await this.props.findAll()
    this.setState({bookings: bookings})
  }

  // componentWillMount = async () => {
  //   var bookings = await this.props.findAll()
  //   this.setState({bookings: bookings})
  // }
    
    
  render() {
    const products = [{
      id: 1,
      name: 'abz',
      price: 199
    }]
    const columns = [{
      dataField: 'id',
      text: 'Product ID'
    }, {
      dataField: 'name',
      text: 'Product Name'
    }, {
      dataField: 'price',
      text: 'Product Price'
    }];    
    return (
      <BootstrapTable keyField='id' data={ products } columns={ columns } />
    );
  }
}

export default HomeWithRouter;