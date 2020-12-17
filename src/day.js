import React from 'react';

import './day.css';
import { weatherStateIcon } from './api-requests';

const Day = ({ data }) => {
  const date = new Date(data.applicable_date);
  const weatherIcon = weatherStateIcon(data.weather_state_abbr);
  const minTemp = Math.round( data.min_temp );
  const maxTemp = Math.round( data.max_temp );
  const currentTemp = Math.round( data.the_temp );

  return (
    <div className="day">
      <p className="date">{date.toDateString()}</p>
      <div>
        <img src={weatherIcon} alt={data.weather_state_name} />

        <div>
          <p>
            <span className="fas fa-long-arrow-alt-up" />
            {maxTemp}&deg; High
          </p>

          <p>
            <span
              className="fas fa-long-arrow-alt-down"
              style={{ color: '#555' }}
            />
            {minTemp}&deg; Low
          </p>

        </div>
      </div>
      <p className="currentTemp"> {data.weather_state_name} </p>
      <p className="currentTemp"> <span className="data">Currently</span> {currentTemp}&deg;</p>
    </div>
  );
};

export default Day;
