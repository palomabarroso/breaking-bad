import React, { Component } from 'react';
import './InputSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class InputSearch extends Component {
    render() {
        return (
            <div className="inputSearch">
                <input type="text"
                    placeholder="Pesquise por personagens"
                    value={this.props.valor}
                    onChange={this.props.onChangeSearch}>
                </input>
                <i><FontAwesomeIcon icon={faSearch} className='' /></i>
            </div>
        )
    }
}

export default InputSearch;