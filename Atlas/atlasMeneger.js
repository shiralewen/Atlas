import country from "./countryClass.js";
// import declareBtns from "../burger.js"; 


let allCountries_ar=[];
const firstCountries=[
    "israel",
    "united states",
    "france",
"united kingdom",
"thailand"]
export const createCountry=(_codeCountry)=>{
   document.querySelector("#id_parent").innerHTML="";


const input = document.getElementById('input');

  let all_ar=allCountries_ar.filter((item)=>
    item.name.common.toLowerCase().includes(_codeCountry.toLowerCase())
  );
  if(all_ar.length>0){
    all_ar.forEach((item)=>{
       let country1=new country("#id_parent",item,startFiveCountries,getNameByCode,createCountryByCode)
       country1.previewRender();
    });
  }else{
    document.querySelector("#id_parent").innerHTML=`<h2>Country ${_input} is not found</h2>`
  }
};

export const createCountryByCode = (_input) => {
    document.querySelector("#id_parent").innerHTML = "";
    

    let arr = allCountries_ar.filter((item) => 
        // console.log(item.cca3);
        item.cca3.toLowerCase()==(_input.toLowerCase())
        // item.cca3.toLowerCase()==_input.toLowerCase();

    );

    if(_input ===""||_input===" "){
        alert("empty");
    }else if(arr.length>0){
        arr.forEach((item)=>{
            let country1 = new country("#id_parent", item, startFiveCountries, getNameByCode, createCountryByCode)
            country1.render();
        });
    }

};


export const getCountries=(_data)=>{
    allCountries_ar=_data;
    sortAB();
}

const sortAB=()=>{
    allCountries_ar.sort(function(a,b){
        let x=a.name.common.toLowerCase();
        let y=b.name.common.toLowerCase();
        if(x<y){
            return -1;
        }
        if (x>y){
            return 1;
        }
        return 0;

    });
}

export const startFiveCountries = () => {
    //document.querySelector("id_load").classList.add("d-none");
    document.querySelector("#id_parent").innerHTML = "";
    
    let tmp = [];
    tmp = allCountries_ar.filter((item) =>
        firstCountries.includes(item.name.common.toLowerCase())

    );
    tmp.forEach((item)=>{
        let country1 = new country("#id_parent", item, startFiveCountries, getNameByCode, createCountryByCode)
        country1.previewRender();
    });
}

export const getNameByCode = async(code)=>{
    let url=`https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await fetch(url);
    let data= await resp.json();
    // console.log(data[0].name.common);
    return data[0].name.common;
}
