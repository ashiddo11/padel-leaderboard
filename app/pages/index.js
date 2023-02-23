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
      results: []
    }
  }
  
  
  componentDidMount = async () => {
    try {
      var res = await fetch("/api/results/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      res = await res.json()
      if (res.results) {
        var results = res.results
        for (let i = 0; i < results.length; i++) {
          results[i].rank = i+1;
          results[i].points_per_match = results[i].total_score / results[i].total_matches
        }
        this.setState({results: results})
      }
      return results
    } catch (error) {
      console.error(error)
    }
  } 
    
  render() {
    const products = [{
      id: 1,
      name: 'abz',
      price: 199
    }]
    const columns = [{
      dataField: 'rank',
      text: 'Rank'
    },{
      dataField: 'username',
      text: 'Username'
    },{
      dataField: 'total_score',
      text: 'Total Score'
    },{
      dataField: 'total_matches',
      text: 'Total Matches'
    },{
      dataField: 'points_per_match',
      text: 'Points per Match'
    }];
    return (
      <BootstrapTable keyField='id' data={ this.state.results } columns={ columns } />
    );
  }
}

export default HomeWithRouter;