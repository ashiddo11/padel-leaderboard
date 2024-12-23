import React, {Component, useEffect} from 'react';
import {useRouter} from 'next/router';
import {Table, Card, Loader, Center} from '@mantine/core';

const HomeWithRouter = (props) => {
  const router = useRouter();
  return <Home {...props} router={router} />;
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      results: [],
    };
  }

  componentDidMount = async () => {
    try {
      this.setState({loading: true});
      var res = await fetch('/api/results/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      res = await res.json();
      if (res.results) {
        var results = res.results;
        for (let i = 0; i < results.length; i++) {
          results[i].rank = i + 1;
          results[i].points_per_match = (results[i].total_score / results[i].total_matches).toFixed(
            2,
          );
        }
        this.setState({results: results});
      }
      return results;
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({loading: false});
    }
  };

  render() {
    const rows = this.state.results.map((result) => {
      return (
        <tr key={result.username}>
          <td>{result.rank}</td>
          <td>{result.username}</td>
          <td>{result.total_score}</td>
          <td>{result.total_matches}</td>
          <td>{result.points_per_match}</td>
        </tr>
      );
    });
    return (
      <>
        <Card className="rankings" shadow="sm" radius="sm">
          <Card.Section>
            <Table striped highlightOnHover withborder="true" withColumnBorders>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Total Score</th>
                  <th>Total Matches</th>
                  <th>Points per Match</th>
                </tr>
              </thead>
              <tbody>
                {this.state.loading ? (
                  <tr>
                    <td colSpan={5} align="center" py={20}>
                      <Loader variant="dots" size="xl" />
                    </td>
                  </tr>
                ) : (
                  rows
                )}
              </tbody>
            </Table>
          </Card.Section>
        </Card>
      </>
    );
  }
}

export default HomeWithRouter;
