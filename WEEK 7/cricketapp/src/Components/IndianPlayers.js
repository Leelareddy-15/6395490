import React from "react";

export default function IndianPlayers() {
  const IndianTeam = ["Sachin1","Dhoni2","Virat3", "Rohit4","Yuvaraj5","Raina6"];

  
  const [first, second, third, fourth, fifth,sixth] = IndianTeam;

  const T20Players = ["Mr.First Player", "Mr.Second Player", "Mr.Third Player"];
  const RanjiTrophyPlayers = ["Mr.Fourth Player", "Mr.Fifth Player", "Mr.Sixth Player"];
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h1>Indian Team</h1>

      <h1>Odd Players</h1>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>

      <hr />

      <h1>Even Players</h1>
      <ul>
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>

      <hr />

      <h1>List of Indian Players Merged:</h1>
      {mergedPlayers.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
