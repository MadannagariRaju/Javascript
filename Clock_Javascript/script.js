// let a= new Date();
// let hours= a.getHours();
// let minutes = a.getMinutes();
// let seconds = a.getSeconds();

// let ele = document.getElementsByClassName('Time')[0];

// setInterval(function(){
//     ele.innerHTML = hours+" : "+minutes+" : "+seconds
// },0)


function updateTime() {
    let a = new Date();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    
    // Add leading zeros to hours, minutes, and seconds if they are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = hours + " : " + minutes + " : " + seconds;
    
    let ele = document.getElementsByClassName('Time')[0];
    ele.innerHTML = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time immediately when the page loads
// updateTime();
