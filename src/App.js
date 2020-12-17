import React, { Component } from 'react';
import { searchLocation } from './api-requests';
import './App.css';

import Search from './search';
import City from './city';

class App extends Component {
  state = {
    cities: [],
    info: {
      show: false,
      message: '',
    },
    searching: false,
  };

  async newSearch(e) {
    document.activeElement.blur();
    e.preventDefault();
    this.setState({ searching: true });
    const searchString = e.target[0].value;
    const { ok, cities } = await searchLocation(searchString);
    if (ok) {
      if (cities.length < 1) {
        this.showMessage(
          `Could not find any cities when searching for ${searchString}`
        );
      } else {
        this.setState({ cities, searching: false });
      }
    } else {
      const errorMessage = `An error occurred while searching.
      This is probably because of my restricted access to the weather data.
      I'm only allowed 50 requests per day. Try again tomorrow!`;
      this.showMessage(errorMessage, 15000);
    }
  }

  showMessage(message, time = 5000) {
    this.setState({ searching: false, info: { show: true, message } });
    setTimeout(
      () => this.setState({ info: { show: false, message: '' } }),
      time
    );
  }

  render() {
    const { cities, info, searching } = this.state;
    return (
      <div className="app">
        <h2>Element84 Meta Weather Station</h2>
        <Search onSubmit={e => this.newSearch(e)} searching={searching} />
        {info.show && <p className="tmpMessage">{info.message}</p>}
        {cities.map(data => <City key={data.Key} data={data} />)}
      </div>
    );
  }
}

export default App;
