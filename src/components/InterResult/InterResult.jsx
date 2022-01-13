import React from "react";
import "../InterResult/InterResult.scss";
import games from "../../resources/games.json";

function InterResult({}) {
  //answers = {gamelove: true, price: "Free"}

  const answers = localStorage.getItem("answers");

  function filterResults() {
    games.filter((game) => {
      for (let property in game) {
        if (game[property] !== answers[property]) {
          return false;
        }
      }

      return true;
    });
  }

  return (
    <div>
      <img />
    </div>
  );
}

export default InterResult;
