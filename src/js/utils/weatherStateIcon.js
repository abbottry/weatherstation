/**
 * @param {string} weatherAbbrv Meta Weathers's weather ID for an icon
 * @return {string} an URL pointing to the image of the weather status given
 */
export const weatherStateIcon = weatherAbbrv => {
  return (
    `http://metaweather.com/static/img/weather/png/64/` + weatherAbbrv + `.png`
  );
};
