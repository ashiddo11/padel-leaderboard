import { useRouter } from "next/router";
import React, {useEffect} from "react";
const _ = require('lodash');

export default function Player() {
  const router = useRouter();
  const query = router.query;
  const {player} = query;
  const [currentPlayer, setCurrentPlayer] = React.useState({})
  const [matchResults, setMatchResults] = React.useState([])
  useEffect(() => {
    fetch(`/api/player/get?username=${player}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
    }).then((result) => result.json().then((result) => {
        if (_.isEmpty(currentPlayer)) {
            setCurrentPlayer(result.player[0])
        }
        if (_.isEmpty(matchResults)) {
            setMatchResults(result.match_results)
        }
    }))
  })

  return (
    <div className="profile">
        <h2 className="title">
            {currentPlayer.username} stats
        </h2>
        <table className="info">
            <tbody>
                <tr>
                    <td>Username:</td>
                    <td>{currentPlayer.username}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{currentPlayer.total_score}</td>
                </tr>
                <tr>
                    <td>Total Matches:</td>
                    <td>{currentPlayer.total_matches}</td>
                </tr>
            </tbody>
        </table>
        <h2 className="title"> Last 5 Matches</h2>
        <table className="results">
            <tbody>
                <tr>
                    <td>Match ID</td>
                    <td>Outcome</td>
                    <td>Partner</td>
                    <td>Score</td>
                    <td>Opponents</td>
                </tr>
                {Object.keys(matchResults).map((key, index) => { 
                    return(
                    <tr key={`${index}`}>
                        <td>{matchResults[index].match_id}</td>
                        <td>{matchResults[index].outcome}</td>
                        <td>{matchResults[index].partner}</td>
                        <td>{`${matchResults[index].score} - ${matchResults[index].loserScore}`}</td>
                        <td>{matchResults[index].opponents[0]}, {matchResults[index].opponents[1]}</td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
        <style>{`
                    .profile {
                        width: 100%;
                        max-width: 500px;
                        margin: 40px auto 0;
                        padding: 15px;
                        background-color: #fff;
                        box-shadow: 0 2px 3px 0px rgba(0,0,0,0.2);
                        border-radius: 5px;
                    }
                
                    .photo { border-radius: 100%; margin-top: -30px; }
                    .title { margin-top: 0; }
                    
                    .info {
                        width: 50%;
                        margin: 0 0 10px;
                        border-collapse: collapse;
                        font-size: 14px;
                        text-align: left;
                    }

                    .results {
                        width: 100%;
                        margin: 0 0 10px;
                        border-collapse: collapse;
                        font-size: 14px;
                        text-align: left;
                    }
                    .results tr:nth-child(odd) { background-color: #f5f5f5; } 
                    .results tr td { padding: 6px; } 
                    
                    .results tr td:first-child {
                        font-weight: 600;
                        text-align: left;
                    }

                    .info tr:nth-child(odd) { background-color: #f5f5f5; } 
                    .info tr td { padding: 6px; } 
                    
                    .info tr td:first-child {
                        font-weight: 600;
                        text-align: left;
                    } 
                `}</style>
    </div>
  );
}