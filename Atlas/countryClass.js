import { createCountryByCode } from "./atlasMeneger.js";

export default class country {
  constructor(
    _parent,
    _item,
    _startFiveCountries,
    _getNameByCode,
    _createCountryByCode
  ) {
    this.startFiveCountries = _startFiveCountries;
    this.getNameByCode = _getNameByCode;
    this.createCountryByCode = _createCountryByCode;
    this.parent = _parent;
    this.name = _item.name.common;
    this.region = _item.region;
    this.coins=this.coin = _item.currencies?Object.keys(_item.currencies):"none";
    this.pop = `${(
      Math.floor((_item.population / 1000000) * 100) / 100
    ).toLocaleString()}M`;
    this.capital = _item.capital ? _item.capital : "none";
    this.languages = _item.languages
      ? Object.values(_item.languages).join()
      : "none";
    this.flag = _item.flags.png;
    this.lat = _item.latlng[0];
    this.lon = _item.latlng[1];
    this.countryCode = _item.cca3;
    this.borders = _item.borders;
  }

  render() {
    let myDiv = document.createElement("div");
    myDiv.className = "container row justify-content-around";
    document.querySelector(this.parent).append(myDiv);
    document.querySelector(this.parent).className = "row";
    myDiv.innerHTML = `
   
    <div class="col-md-6">
        <h1 class= "text-center m-2">${this.name}</h1>
        <table>
            <tr>
                <td>population: </td>
                <td> ${this.pop}</td>
            </tr>
            <tr>
                <td>region: </td>
                <td>${this.region}</td>
            </tr>
            <tr>
                <td>Languages: </td>
                <td>${this.languages}</td>
            </tr>
            <tr>
                <td>Coins: </td>
                <td>${this.coins}</td>
            </tr>
            <tr>
                <td>Capital: </td>
                <td>${this.capital}</td>
            </tr>
            <tr>
                <td>States with borders: </td>
                <td id="id_borders"></td>
            </tr>

        </table>
       
    </div>
    <img src=${this.flag} class="float-start col-5 m-4" alt="${this.name}">
    <iframe class="m-5 col-12" height="400"
        src="https://maps.google.com/maps?q=${this.lat},${this.lon}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0"
        scrolling="no" marginheight="0" marginwidth="0"></iframe>
        `;
 
       if(this.borders){
        this.borders.forEach(async(item)=>{
          if(item!="PSE"){
            let fullName=await this.getNameByCode(item);
            let span=document.createElement("span");
            span.className="lank";
            span.innerHTML=`${fullName}   `;
            document.querySelector("#id_borders").append(span);
            span.addEventListener("click",()=>{
              createCountryByCode(item);
            });
          }
        });
       }else{
        document.querySelector("#id_borders").innerHTML+="none"
      }

      let btn =myDiv.querySelector("#id_home");
      btn.addEventListener("click",()=>{
        document.querySelector(this.parent).innerHTML="";
        this.startFiveCountries();
      })
  }


  previewRender(){
    let myDiv=document.createElement("div");
    myDiv.className="d-flex justify-content-center my-3 text-center";
    console.log(this.parent);
    document.querySelector(this.parent).append(myDiv);
    document.querySelector(this.parent).className="row row-cols-lg-3 row-cols-md-2 justify-content-around "
    myDiv.innerHTML+=`
    <div class="card preCard h-100">
      <img src="${this.flag}" class="card-img-top preImg shadow" width="100%" alt="${this.name}">
    <div class="card-body">
         <p class="card-text  m-0 p-3">Name: ${this.name}</p>
    </div>
    </div>
    `
    myDiv.querySelector(".preCard").addEventListener("click",()=>{
      document.querySelector("#id_parent").innerHTML="";
      this.render();
    }) 
  }
}
