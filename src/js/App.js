import React, { Component } from 'react';

import City from './components/City/City';
import Search from './components/Search/Search';

import { searchLocation } from './utils/searchLocation';

import './App.css';

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

    try {
      const response = await searchLocation(searchString);

      const { data: cities = [] } = response

      if (cities.length === 0) {
        this.showMessage(`Could not find any cities matching your request '${searchString}'`)
      } else {
        this.setState({ cities, searching: false })
      }
    } catch (e) {
      console.error(e)
      this.showMessage(e.toString(), 15000);
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
        {
          info.show && (
            <p className="tmpMessage">{info.message}</p>
          )
        }
        {
          cities.map(data => (<City key={data.woeid} data={data} />))
        }
      </div>
    );
  }
}

export default App;
