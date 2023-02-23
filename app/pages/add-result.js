import React, {Component} from 'react';
import { useRouter } from 'next/router'

const AddBookingWithRouter = (props) => {
  const router = useRouter()
  return <AddBooking {...props} router={router} />
}

class AddBooking extends Component {

  constructor(props){
    super(props);
    this.state = {
      winner1: '',
      winner2: '',
      winnerScore: '',
      totalAmount: ''
    }
    this.handleChangeWinner1 = this.handleChangeWinner1.bind(this);
    this.handleChangeWinner2 = this.handleChangeWinner2.bind(this);
    this.handleChangeWinnerScore = this.handleChangeWinnerScore.bind(this);
    this.handleChangeLoser1 = this.handleChangeLoser1.bind(this);
    this.handleChangeLoser2 = this.handleChangeLoser2.bind(this);
    this.handleChangeLoserScore = this.handleChangeLoserScore.bind(this);
  }

  handleChangeWinner1(event) {
    this.setState({winner1: event.target.value});
  }
  handleChangeWinner2(event) {
    this.setState({winner2: event.target.value});
  }
  handleChangeWinnerScore(event) {
    this.setState({winnerScore: event.target.value});
  }
  handleChangeLoser1(event) {
    this.setState({loser1: event.target.value});
  }
  handleChangeLoser2(event) {
    this.setState({loser2: event.target.value});
  }
  handleChangeLoserScore(event) {
    this.setState({loserScore: event.target.value});
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Winning Team</label>
          <input type="text" className="form-control" id="winner1" placeholder="Player 1" value={this.state.winner1}
          onChange={this.handleChangeWinner1}/>
          <input type="text" className="form-control" id="winner2" placeholder="Player 2" value={this.state.winner2}
          onChange={this.handleChangeWinner2}/>
          <input type="text" className="form-control" id="winnerScore" placeholder="Winner Score" value={this.state.winnerScore}
          onChange={this.handleChangeWinnerScore}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Losing Team</label>
          <input type="text" className="form-control" id="loser1" placeholder="Player 1" value={this.state.loser1}
          onChange={this.handleChangeLoser1}/>
          <input type="text" className="form-control" id="loser2" placeholder="Player 2" value={this.state.loser2}
          onChange={this.handleChangeLoser2}/>
          <input type="text" className="form-control" id="loserScore" placeholder="Losing Score" value={this.state.loserScore}
          onChange={this.handleChangeLoserScore}/>
        </div>
        <button onClick={async() => {
          console.log("adding")
          let data = {
            "winner1": this.state.winner1,
            "winner2": this.state.winner2,
            "winnerScore": this.state.winnerScore,
            "loser1": this.state.loser1,
            "loser2": this.state.loser2,
            "loserScore": this.state.loserScore
          }
          const res = await fetch("/api/results/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf8"
            },
            body: JSON.stringify(data)
          })
          await this.props.router.push("/#")
          }} type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddBookingWithRouter