import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Card from './Card/Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      api: [],
      inputSearch: ''
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
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

    const cards = result;
    const api = result;
    this.setState({
      cards,
      api
    })
  }

  onChangeSearch(e) {
    const { api } = this.state;
    const arraySearch = api.filter(function (characters) {
      const inputSearch = e.target.value.toLowerCase();
      if (inputSearch !== '') {
        return characters.name.toLowerCase().indexOf(inputSearch) > -1;
      } else {
        return api
      }
    });

    const cards = arraySearch;
    this.setState({
      cards
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} alt="" className="logo" />
          <input placeholder="Pesquise por personagens" className="input-search" onChange={this.onChangeSearch} />
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
