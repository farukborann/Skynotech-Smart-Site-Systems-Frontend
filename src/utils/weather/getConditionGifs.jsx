import clear_day from "src/assets/gifs/clear-day.gif";
import clear_night from "src/assets/gifs/clear-night.gif";
import cloudy_day from "src/assets/gifs/cloudy-day.gif";
import cloudy_night from "src/assets/gifs/cloudy-night.gif";
import rainy_night from "src/assets/gifs/rainy-night.gif";
import rainy_gif from "src/assets/gifs/rainy.gif";
import snowy_day from "src/assets/gifs/snowy-day.gif";
import snowy_night from "src/assets/gifs/snowy-night.gif";
import sunny_day from "src/assets/gifs/sunny-day.gif";

import {
  cloudyConditions,
  rainyConditions,
  snownyConditions,
} from "./conditionList";

const getConditionGif = (condition, locationHour) => {
  let date = new Date(locationHour);
  let hour = date.getHours();
  let period = hour >= 6 && hour <= 18 ? "day" : "night";

  if (condition === "Sunny") {
    return sunny_day;
  } else if (condition === "Clear" && period === "day") {
    return clear_day;
  } else if (condition === "Clear" && period === "night") {
    return clear_night;
  } else if (cloudyConditions.includes(condition) && period === "day") {
    return cloudy_day;
  } else if (cloudyConditions.includes(condition) && period === "night") {
    return cloudy_night;
  } else if (rainyConditions.includes(condition) && period === "day") {
    return rainy_gif;
  } else if (rainyConditions.includes(condition) && period === "night") {
    return rainy_night;
  } else if (snownyConditions.includes(condition) && period === "day") {
    return snowy_day;
  } else if (snownyConditions.includes(condition) && period === "night") {
    return snowy_night;
  } else {
    return clear_day;
  }
};

export default getConditionGif;
