import React, { useState, useEffect } from "react";
import questionsData from "../../resources/questions.json";
import "./ExpertPage.css";




const ExpertPage = ({quit}) => {
  const [newGame, setNewGame] = useState({
      gameName: "",
      pictureLink: "",
  });

  function checkData() {
    if(newGame.gameName && newGame.pictureLink && newGame.rating) {
      let data = JSON.parse(localStorage.getItem('games')) || [];
      data.push(newGame);
      localStorage.setItem('games', JSON.stringify(data));
      quit();
    }
  }

  useEffect(() => {
    let options = {}
    for (let i=0; i<questionsData.length; i++) {
      options[questionsData[i].type] = questionsData[i].answers[0].text;
    }
    setNewGame({...newGame, ...options});
    return () => {
      setNewGame({
        gameName: "",
        pictureLink: "",
    });
    };
  }, []);

  {if (localStorage.getItem('isAuth')) {
    return (
      <div className="expert">
        {/* <h1 onClick={() => {console.log(newGame)}}>ff</h1> */}
        <input type="text" placeholder="Введите название игры" value={newGame.gameName} onChange={(e) => {setNewGame({...newGame, ["gameName"]: e.target.value})}} className="text" />
        <input type="text" placeholder="Добавьте ссылку на изображение" value={newGame.pictureLink} onChange={(e) => {setNewGame({...newGame, ["pictureLink"]: e.target.value})}} className="text" />
        <input type="text" placeholder="Добавьте рейтинг игры" value={newGame.rating} onChange={(e) => {setNewGame({...newGame, ["rating"]: Number(e.target.value)})}} className="text" />
    
        {questionsData.map((el, index) => {
          return (
            <div key={index} className="selectType">
              <p className="add_text">{el.addText}</p>
              <select
                value={newGame[el.type] ? newGame[el.type] : el.answers[0].text}
                onChange={(e) => {
                  setNewGame({ ...newGame, [el.type]: e.target.value });
                }}
                className="question_select"
              >
                {el.answers.map((el, index) => {
                  return (
                    <option key={index} value={el.text}>
                      {el.description}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
    
        <div className="buttons">
          <button onClick={checkData} className="add">Добавить</button>
          <button onClick={() => quit()} className="quit">Выйти</button>
        </div>
        
      </div>
      );
  }
  else {
    return (
      <div className="reject">
        <h1 className="alert">Авторизируйтесь как эсперт, чтобы иметь возможность добавлять игры</h1>
        <button onClick={() => quit()} className="quit">Выйти</button>
      </div>
      
    )
  }
}
  
};

export default ExpertPage;
