import axios from "axios";

/**
 * @async
 * @param {string} name name of city to search for
 * @return {{ok: boolean, cities: []} list of cities matching search string
 */
export const searchLocation = async name => {
  const url = `https://api.codetabs.com/v1/proxy/?quest=https://www.metaweather.com/api/location/search/?query=${name}`;

  return axios({
    method: 'get',
    url
  })
};
