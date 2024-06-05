import {
  cloudyConditions,
  rainyConditions,
  snownyConditions,
} from "./conditionList";

const getTurkishWeatherCondition = (apiCondition) => {
  const allConditions = [
    ...cloudyConditions,
    ...rainyConditions,
    ...snownyConditions,
  ];

  const turkishTranslations = {
    Clear: "Açık Hava",
    Sunny: "Güneşli",
    "Partly cloudy": "Parçalı bulutlu",
    Cloudy: "Bulutlu",
    Overcast: "Kapalı",
    Mist: "Sisli",
    "Blowing snow": "Kar fırtınası",
    Fog: "Sis",
    "Freezing fog": "Dondurucu sis",
    "Patchy rain possible": "Yer yer yağmur olasılığı",
    "Patchy sleet possible": "Yer yer karla karışık yağmur olasılığı",
    "Thundery outbreaks possible":
      "Yer yer gökgürültülü sağanak yağış olasılığı",
    "Patchy light drizzle": "Yer yer hafif çiseleyen yağmur",
    "Light drizzle": "Hafif çiseleyen yağmur",
    "Heavy freezing drizzle": "Yoğun dondurucu çiseleyen yağmur",
    "Patchy light rain": "Yer yer hafif yağmur",
    "Light rain": "Hafif yağmur",
    "Moderate rain at times": "Zaman zaman orta şiddetli yağmur",
    "Moderate rain": "Orta şiddetli yağmur",
    "Heavy rain at times": "Zaman zaman yoğun yağmur",
    "Heavy rain": "Yoğun yağmur",
    "Moderate or heavy freezing rain": "Orta veya yoğun dondurucu yağmur",
    "Light sleet": "Hafif karla karışık yağmur",
    "Moderate or heavy sleet": "Orta veya yoğun karla karışık yağmur",
    "Light rain shower": "Hafif yağmurlu sağanak",
    "Moderate or heavy rain shower": "Orta veya yoğun yağmurlu sağanak",
    "Torrential rain shower": "Şiddetli yağmurlu sağanak",
    "Light sleet showers": "Hafif karla karışık yağmurlu sağanak",
    "Moderate or heavy sleet showers":
      "Orta veya yoğun karla karışık yağmurlu sağanak",
    "Patchy light rain with thunder":
      "Yer yer hafif yağmurlu gök gürültülü fırtına",
    "Moderate or heavy rain with thunder":
      "Orta veya yoğun yağmurlu gök gürültülü fırtına",
    "Patchy light snow with thunder":
      "Yer yer hafif karla karışık yağmurlu gök gürültülü fırtına",
    "Patchy freezing drizzle possible": "Yer yer donan çisenti olasılığı",
    Blizzard: "Kar fırtınası",
    "Freezing drizzle": "Dondurucu çiseleyen yağmur",
    "Light freezing rain": "Hafif dondurucu yağmur",
    "Patchy light snow": "Yer yer hafif kar",
    "Light snow": "Hafif kar",
    "Patchy moderate snow": "Yer yer orta şiddetli kar",
    "Moderate snow": "Orta şiddetli kar",
    "Patchy heavy snow": "Yer yer yoğun kar",
    "Heavy snow": "Yoğun kar",
    "Ice pellets": "Dolu taneleri",
    "Light showers of ice pellets": "Hafif dolulu sağanak",
    "Moderate or heavy showers of ice pellets":
      "Orta veya yoğun dolulu sağanak",
    "Moderate or heavy snow with thunder":
      "Orta veya yoğun karla karışık yağmurlu gök gürültülü fırtına",
  };

  const matchedCondition = allConditions.find((condition) =>
    apiCondition.toLowerCase().includes(condition.toLowerCase())
  );

  // Eğer bir eşleşme bulunduysa Türkçe çevirisini al, bulunamadıysa orijinal değeri kullan
  return matchedCondition
    ? turkishTranslations[matchedCondition]
    : apiCondition;
};

export default getTurkishWeatherCondition;
