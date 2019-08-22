import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Card from './Card/Card';
import './App.css';

const url = "https://breakingbadapi.com/api/characters/";

class App extends Component {
  state = {
    cards: []
  }
  async componentDidMount() {
    const result = await axios.get(url)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      })
    const cards = result;
    this.setState({
      cards
    })
    console.log(cards)
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} alt="" className="logo" />
          <input type="search" placeholder="Pesquise por personagens" className="input-search" />
        </div>
        <div className="card-container">
          <h2>Personagens</h2>
          <div className="card-grid">
            {this.state.cards.map((cardItem) => (
              <Card
               cardItem={cardItem}
              />
            ))}
          </div>
        </div>
      </div>
    )
  };
}

export default App;
