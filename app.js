



let btn=document.getElementById("btn");

let go=document.getElementById("city");

console.log(btn)
console.log(go)










const data=async(num)=>{


const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${num}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50bc9a226dmsh728afccf42d9bdbp14c79ajsn8382b4ea67db',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	
    let data1 = result.temp;

    console.log(result);

let tempe = document.getElementById("tempe");

tempe.innerHTML=`${data1}<sup>o</sup>C`;

let cloud=document.getElementById("cloudpct");
let wind=document.getElementById("wind_speed");
let humidity=document.getElementById("humidity");
let sunrise=document.getElementById("sunrise");


cloud.innerHTML=`${result.cloud_pct} Feed`;
wind.innerHTML=`${result.wind_speed} Km/h`;
humidity.innerHTML=`${result.humidity}%`;
sunrise.innerHTML=` ${result.max_temp}<SUP>0</SUP>C / ${result.max_temp}<SUP>0</SUP>C`;






} catch (error) {
	console.error(error);
}


}


btn.addEventListener('click',function(e){


e.preventDefault();



data(`${go.value}`);

let inputcity=document.getElementById("inputcity");
inputcity.innerHTML=`${go.value},India`


})


data("kolkata");




