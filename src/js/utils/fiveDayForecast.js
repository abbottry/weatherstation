import axios from "axios";

/**
 * @param {number} key for the city to get forecast to
 */
export const fiveDayForecast = async key => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.codetabs.com/v1/proxy/?quest=https://www.metaweather.com/api/location/${key}`
    })

    const { data } = response

    return data
  } catch (e) {
    console.error(e);
  }
};
