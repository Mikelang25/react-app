import React from 'react';
import CharacterCard from "./components/CharacterCard";
import "./App.css";
import characters from "./characters.json";

class App extends React.Component {

  state = {
    characters
  };



  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-4 text-center header">Clicky Game</div>
          <div className="col-md-4 text-center header">Guess Status</div>
          <div className="col-md-4 text-center header">Scoreboard</div>
        </div>
        <div className="row">
          <div className="col-md-3 text-center dir-container">
            <h2>Character Click Game</h2>
            <p>Click on the images to earn points, but don't click the same one twice!</p>
          </div>
          <div className="col-md-9 char-container">
            <div class="row">
              <div id="characters" className="col-md-11">
                {this.state.characters.map(character => (
                  <CharacterCard
                      name = {character.name}
                      key={character.id}
                      id={character.id}
                      image={character.image}
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
