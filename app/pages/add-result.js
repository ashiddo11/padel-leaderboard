import React, { Component } from 'react';
import { useRouter } from 'next/router'
import { SimpleGrid, Card, Title, Group, TextInput, Center } from '@mantine/core'

const AddBookingWithRouter = (props) => {
  const router = useRouter()
  return <AddBooking {...props} router={router} />
}

class AddBooking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      winner1: '',
      winner2: '',
      winnerScore: '',
      loserScore: '',
      loser1: '',
      loser2: '',
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
    this.setState({ winner1: event.target.value });
  }
  handleChangeWinner2(event) {
    this.setState({ winner2: event.target.value });
  }
  handleChangeWinnerScore(event) {
    this.setState({ winnerScore: event.target.value });
  }
  handleChangeLoser1(event) {
    this.setState({ loser1: event.target.value });
  }
  handleChangeLoser2(event) {
    this.setState({ loser2: event.target.value });
  }
  handleChangeLoserScore(event) {
    this.setState({ loserScore: event.target.value });
  }

  render() {
    return (
      <form>
        <SimpleGrid cols={2}>
          <Title order={3} align="center">Winning Team</Title>
          <Title order={3} align="center">Losing Team</Title>
        </SimpleGrid>
        <SimpleGrid cols={2} mt={10}>
          <Card p="xl" withBorder>
            <Card.Section inheritPadding py="xs">
              <TextInput id="winner1" label="Winner 1" placeholder="Player 1" value={this.state.winner1} onChange={this.handleChangeWinner1} />
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <TextInput id="winner2" label="Winner 2" placeholder="Player 2" value={this.state.winner2} onChange={this.handleChangeWinner2} />
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <TextInput id="winnerScore" label="Winner Score" placeholder="Winning Score" value={this.state.winnerScore} onChange={this.handleChangeWinnerScore} />
            </Card.Section>
          </Card>
          <Card p="xl" withBorder>
            <Card.Section inheritPadding py="xs">
              <TextInput id="loser1" label="loser 1" placeholder="Player 1" value={this.state.loser1} onChange={this.handleChangeLoser1} />
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <TextInput id="loser2" label="loser 2" placeholder="Player 2" value={this.state.loser2} onChange={this.handleChangeLoser2} />
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <TextInput id="loserScore" label="Loser Score" placeholder="Losing Score" value={this.state.loserScore} onChange={this.handleChangeLoserScore} />
            </Card.Section>
          </Card>
        </SimpleGrid>
        <Center mt={20}>
          <button onClick={async () => {
            console.log("adding")
            let data = {
              "winner1": this.state.winner1,
              "winner2": this.state.winner2,
              "winnerScore": this.state.winnerScore,
              "loser1": this.state.loser1,
              "loser2": this.state.loser2,
              "loserScore": this.state.loserScore
            }
            console.log(data)
            const res = await fetch("/api/results/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf8"
              },
              body: JSON.stringify(data)
            })
            await this.props.router.push("/#")
          }} type="submit" className="btn btn-primary">Submit</button>
        </Center>
      </form>
    );
  }
}

export default AddBookingWithRouter
