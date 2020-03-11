import React from 'react';
import CharacterCard from "./components/CharacterCard";
import "./App.css";
import characters from "./characters.json";

class App extends React.Component {

  state = {
    characters,
    answer: "",
    selected:[],
    score:0,
    highSchore:0
  };

  shuffleCharacters(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  markedSelected = id =>{
      if(this.state.selected.includes(id)){
        this.setState({
          answer:"That guess is wrong!",
          selected:[],
          score:0
        });
      }else{
        this.state.selected.push(id)
        this.setState({
          answer:"That guess is correct!",
          score: this.state.score + 1
        });
      }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-4 text-center header">Premier League Pick Game</div>
          <div className="col-md-4 text-center header"><p>{this.state.answer}</p></div>
    <div className="col-md-4 text-center header"><p>Score: {this.state.score}</p></div>
        </div>
        <div className="row">
          <div className="col-md-3 text-center dir-container">
            <h2>Team Click Game</h2>
            <p>Click on the images to earn points, but don't click the same one twice!</p>
          </div>
          <div className="col-md-9 char-container">
            <div className="row">
              <div id="characters" className="col-md-11">
                {this.shuffleCharacters(characters)}
                {this.state.characters.map(character => (
                  <CharacterCard
                    name={character.name}
                    key={character.id}
                    id={character.id}
                    image={character.image}
                    markedSelected = {this.markedSelected}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



}

export default App;
