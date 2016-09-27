import axios from 'axios'

export function getAirQuality(place) {
 return axios.get("https://api.breezometer.com/baqi/?location=" + place.replace(/ /g,"+") + "&key=075ad8e8766a4096a8e8029b4b142108");
}
