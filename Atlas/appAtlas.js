import { getCountries, startFiveCountries } from "./atlasMeneger.js";
import { declareEvents } from "./event.js";

const init = () => {
    // console.log("jjjjj");
    doApi();
    declareEvents();
};
const doApi = async () => {
    let url = "https://restcountries.com/v3.1/all"
    let resp = await fetch(url);
    let data = await resp.json();
    // console.log(data)
    data=data.filter(item=>item.name.common!="Palestine")
    getCountries(data);
    startFiveCountries();
};
init();