// document.write("hello world")

// "https://Historical-Weather-API2.proxy-production.allthingsdev.co/v1/archive?latitude=52.52&longitude=13.41&elevation=1603&start_date=2024-07-09&end_date=2024-07-23&hourly=temperature_2m&tilt=0&azimuth=0&models=best_match&daily=weather_code&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm&timeformat=iso8601&timezone=auto&cell_selection=land"


// setInterval(async function(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log(await fetch(url))
// },5000)  


// setInterval(function() {
//     let ele = document.querySelector('#bulbid');
//     ele.classList.toggle('off');
// }, 300);


let bele= document.getElementById('btn')
let bulbele = document.getElementById('bulbid')

function x(){
    if(bele.innerHTML == 'on') {
        bulbele.className="bulb-glow"
        bele.innerHTML = 'off'
    }
    else if(bele.innerHTML == 'off'){
        bulbele.classList.toggle('off')
        bele.innerHTML = 'on'
        
    }
}

bele.addEventListener('click',x)