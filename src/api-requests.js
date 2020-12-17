const BASE_URL = 'https://api.codetabs.com/v1/proxy/?quest=https://www.metaweather.com/api/location';

/**
 * @async
 * @param {string} name name of city to search for
 * @return {{ok: boolean, cities: []} list of cities matching search string
 */
export const searchLocation = async name => {
  let searchResult = { cities: [] };

  /*const url =
    BASE_URL +
    '/locations/v1/cities/search' +
    `?apikey=${API_KEY}` +
    `&q=${name}`;*/

  const url =
    BASE_URL +
    `/search/?query=${name}`;

  const headers = new Headers();
    //headers.set('Access-Control-Allow-Origin', '*');
    //headers.set('Content-Type', 'application/json');
    //headers.set('Accept', 'application/json');

    //headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Credentials', 'true');
    headers.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    headers.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  try {
    const res = await fetch(url);
    if (res.ok) {
      const parsedRes = await res.json();
      searchResult.cities = parsedRes;
      searchResult.ok = true;
    } else {
      searchResult.ok = false;
    }
  } catch (e) {
    console.error(e);
    searchResult.ok = false;
  }

  console.log(searchResult.cities);

  return searchResult;

  /*function get_cities() {
    return fetch(url, {
        mode: "cors",
        method: 'GET',
        headers: headers
    })
    .then((response) => {
        if (response.ok) {
            //console.log(response.json());
            return response.json();
        } else {
            //throw new Error('Server response wasn\'t OK');
        }
    })
    .then((json) => {
      //console.log(json);
      return json;
    });
  }

  get_cities().then((json) => {
    //console.log(json);
    searchResult.cities = json
  });

  console.log(searchResult.cities);
  return searchResult;*/

};

/**
 * @param {number} key for the city to get forecast to
 */
export const fiveDayForecast = async key => {
  let forecast = {};
  
  /*try {
    const url =
      BASE_URL +
      `/${key}`;
    const res = await fetch(url);
    if (res.status !== 200) {
      console.warn(`Non 200 response status (${res.status})`);
      console.warn(res);
    }
    forecast = res.status === 200 ? await res.json() : [];
  } catch (error) {
    console.error(error);
  }*/

  try {
    const url2 =
      BASE_URL +
      `/${key}`;
    const res = await fetch(url2);
    if (res.ok) {
      forecast = await res.json();
    } else {
      console.warn(`Non 200 response status (${res.status})`);
      console.warn(res);
    }
  } catch (e) {
    console.error(e);
  }

  return forecast;
};

/**
 * @param {string} weatherAbbrv Meta Weathers's weather ID for an icon
 * @return {string} an URL pointing to the image of the weather status given
 */
export const weatherStateIcon = weatherAbbrv => {
  return (
    `http://metaweather.com/static/img/weather/png/64/` + weatherAbbrv + `.png`
  );
};
