import React, {useEffect, useState} from "react";
import "../InterResult/InterResult.css";
import games from "../../resources/games.json";
import {dictionary} from "../../resources/dictionary";

function InterResult({answers}) {
  // const answers = localStorage.getItem("answers");

  


  var matches = 0;
  let args = [];
  const result = sortResults(filterResults());

  useEffect(() => {
    args = [];
  },[answers])


  function getArgs(game) {
    for (let key in answers) {
      if (String(answers[key]) == String(game[key] )) {
        args.push(dictionary[key]);
      }
    }

  }

  function filterResults() {
    let current = []; 
    let maxMatch = 0;
    let data = JSON.parse(localStorage.getItem("games"))
    data.forEach((game) => {
      let statistic = 0;
      for (let property in answers) { 
        if (String(answers[property]) == String(game[property])) {
          
          statistic++;
        }
      }
      if (statistic > maxMatch) {
        maxMatch = statistic;
        matches = statistic;
        current = [];
        current.push(game);
      }
      else if (statistic == maxMatch) {
        current.push(game);
      }
    })
    return current;
  }

  function sortResults(games) {
    console.log(games)
    games = games.sort((prev, next) => next.mark - prev.mark);
    getArgs(games[0])
    return games[0];
  }

  return (
    <div className="result">
      <p className="result_title">Я думаю, что вам идеально подходит:</p>
      <img  src={result.pictureLink}/>
      <p className="result_name">{result.gameName}</p>
      <p>Количество совпадений: {matches}</p>
      {args.length>0 && args.map(el => {
        return <p key={el}>{el}</p>
      })}
    </div>
  );
}

export default InterResult;
