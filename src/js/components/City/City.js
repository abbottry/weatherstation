import React, { Component } from 'react';

import Day from '../Day/Day';

import { fiveDayForecast } from '../../utils/fiveDayForecast';

import expandIcon from '../../../assets/images/expand-icon.svg';

import './City.css';

class City extends Component {
  state = {
    expanded: false,
    forecast: {},
  };

  async toggleDetail(key) {
    let { expanded, forecast } = this.state;

    if (!expanded) {
      forecast = await fiveDayForecast(key);
      console.log(forecast)
    }

    this.setState({ forecast, expanded: !expanded });
  }

  render() {
    const { data } = this.props;
    const { expanded, forecast } = this.state;

    return (
      <div className="city">
        <div className="cityHeader" onClick={() => this.toggleDetail(data.woeid)}>
          <img
            src={expandIcon}
            className={expanded ? 'cityExpanded' : ''}
            alt=">"
          />
          <div>
            <p className="city-name">{data.title}</p>
            <p>
              {data.title}, {data.title}
            </p>
          </div>
        </div>

        <div className="cityBody">
          {
            expanded && forecast.consolidated_weather.map(v => {
              return <Day key={v.created} data={v} />
            })
          }
        </div>
      </div>
    );
  }
}

export default City;
