import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Card from './Components/Card/Card';
import InputSearch from './Components/InputSearch/InputSearch';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
    cards: [],
    resultApi: []
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
    const resultApi = result;
    this.setState({
      cards,
      resultApi
    })
  }

  onChangeSearch = async (e) =>{
    await this.setState({
      inputValue: (e.target.value.toLowerCase())
    })

    const {resultApi} = this.state;
    const {inputValue} = this.state;
    const arraySearch = resultApi.filter(function (characters) {
      if (inputValue !== '') {
        return characters.name.toLowerCase().indexOf(inputValue) > -1;
      } else {
        return resultApi
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
          <InputSearch onChangeSearch ={this.onChangeSearch}/>
        </div>
        <div className="cardContainer">
          <h2>Personagens</h2>
          <div className="cardGrid">
            {this.state.cards.map((cardItem) => (
              <Card key={cardItem.char_id } cardItem={cardItem} />
            ))}
          </div>
        </div>
      </div>
    )
  };
}

export default App;