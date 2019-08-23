import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Card from './Card/Card';
import './App.css';

class App extends Component {
  state = {
    cards: [],
    search: "",
  }

  async componentDidMount() {
    const url = "https://breakingbadapi.com/api/characters/";

    const result = await axios.get(url)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      })

    const arraySearch = result.filter(function (characters) {
      const inputSearch = 'white';
      
      if (inputSearch !== '') {
        return characters.name.toLowerCase().indexOf(inputSearch) > -1;
      } else {
        return result
      }
    });
    
    const cards = arraySearch;
    this.setState({
      cards
    })
  }

  changeSearch = e => {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} alt="" className="logo" />
          <input placeholder="Pesquise por personagens" className="input-search" onChange={this.changeSearch} />
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
