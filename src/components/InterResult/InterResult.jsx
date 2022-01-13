import React from "react";
import "../InterResult/InterResult.css";
import games from "../../resources/games.json";

function InterResult({}) {
  const answers = localStorage.getItem("answers");

  const result = sortResults(filterResults());

  function filterResults() {
    return games.filter((game) => {
      for (let property in answers) {
        if (game[property] !== answers[property]) {
          return false;
        }
      }

      return true;
    });
  }

  function sortResults(games) {
    games.sort((prev, next) => next.mark - prev.mark);
    return games[0];
  }

  return (
    <div>
      <img src={result.pictureLink} />
      {result.gameName}
    </div>
  );
}

export default InterResult;
