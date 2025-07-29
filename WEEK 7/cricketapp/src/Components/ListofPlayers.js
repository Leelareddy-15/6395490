
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Mr.Virat', score: 85 },
    { name: 'Mr.Rohit', score: 90 },
    { name: 'Mr.Gill', score: 45 },
    { name: 'Mr.Ishan', score: 67 },
    { name: 'Mr.Hardik', score: 72 },
    { name: 'Mr.Jadeja', score: 88 },
    { name: 'Mr.Kohli', score: 60 },
    { name: 'Mr.Rahul', score: 91 },
    { name: 'Mr.Shami', score: 40 },
    { name: 'Mr.Bumrah', score: 76 },
    { name: 'Mr.Kuldeep', score: 53 },
  ];

  
  const allPlayers = players.map((player, index) => (
    <li key={index}>
      {player.name} - {player.score}
    </li>
  ));

 
  const filteredPlayers = players
    .filter(player => player.score < 70)
    .map((player, index) => (
      <li key={index}>
        {player.name} - {player.score}
      </li>
    ));

  return (
    <div>
      <h2>List of  Players:</h2>
      <ul>{allPlayers}</ul>

      <h2>List of Players having score less than 70:</h2>
      <ul>{filteredPlayers}</ul>
    </div>
  );
};

export default ListofPlayers;
