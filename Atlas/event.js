import { createCountry,startFiveCountries,createCountryByCode } from "./atlasMeneger.js";
export const declareEvents = () => {
    
    let id_form = document.querySelector("#id_form");
    let id_input = document.querySelector("#id_input");
    //let id_search = document.querySelector("#id_search");
    let id_home = document.querySelector("#id_home");
    let id_Thailand = document.querySelector("#id_Thailand");
    let id_USA = document.querySelector("#id_USA");
    let id_Israel = document.querySelector("#id_Israel");
    let id_France = document.querySelector("#id_France");
    let id_GB = document.querySelector("#id_GB");
    //let parent = document.querySelector("id_parent");
    
    id_Thailand.addEventListener("click", () => {
        createCountryByCode("tha");
    })
    id_USA.addEventListener("click", () => {
        createCountryByCode("USA");
    })
    id_Israel.addEventListener("click", () => {
        createCountryByCode("isr");
    })
    id_France.addEventListener("click", () => {
        createCountryByCode("fra");
    })
    id_GB.addEventListener("click", () => {
        createCountryByCode("gbr");
    })
    id_GB.addEventListener("click", () => {
        getCountries("gbr");
    })
    id_form.addEventListener("submit",e =>{
        e.preventDefault()
        createCountry(id_input.value);
    })
    id_home.addEventListener("click",()=>{
        startFiveCountries();
    })
}