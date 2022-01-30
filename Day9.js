var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
   
//    Get all the countries from Asia continent /region using Filter function
let result=data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
console.log(result);
// Get all the countries with a population of less than 2 lakhs using Filter function
let pop=data.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
console.log(pop);

// Print the following details name, capital, flag using forEach function
data.forEach(element => {
    console.log(`${element.name},${element.capital}:${element.flag}`)
});
// Print the total population of countries using reduce function
let sum=data.reduce((acc,cv)=>acc+cv.population,0);
console.log(sum);
// Print the country which uses US Dollars as currency.
let Dollors=data.filter((ele)=>ele.currencies[0].code==="USD").map((ele)=>ele.name);
console.log(Dollors);
   
}
