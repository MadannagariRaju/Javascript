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
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours%12;
    hours = hours?hours:12;
    // Add leading zeros to hours, minutes, and seconds if they are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds + '    ' + ampm;
    
    let ele = document.getElementsByClassName('Time')[0];
    ele.innerHTML = timeString;

    let date = a.getDate();
    let month = a.getMonth()+1;
    let year = a.getFullYear();

    date = date<10 ? '0'+date : date;
    month = month<10 ? '0'+month : month;

    let head = document.getElementsByClassName('completetime')[0];
    head.innerHTML = date+"/"+month+"/"+year;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time immediately when the page loads
updateTime();


// let toggle = document.getElementsByClassName('toggle')[0];

// function x(){
//     if(document.body.style.backgroundColor === 'white' &&  document.body.style.color === 'black')
//     {
//         document.body.style.backgroundColor='black';
//         document.body.style.color = 'white'
//     }else{
//         document.body.style.backgroundColor='white';
//         document.body.style.color = 'black'
//     }
   
// }

// toggle.addEventListener('click',x);


// Get the toggle element
    const toggleswitch = document.querySelector('.toggleswitch');
    const label = document.querySelector('.onof');

    // Function to toggle dark mode
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');

        // Update the toggle switch state based on dark-mode class
        if (document.body.classList.contains('dark-mode')) {
            label.innerHTML = "TURN OFF"
            toggleswitch.checked = true;
        } else {
            toggleswitch.checked = false;
            label.innerHTML = "TURN ON"

        }
    }

    // Add event listener to the toggle switch
    toggleswitch.addEventListener('change', toggleTheme);

    // Initialize toggle switch state based on existing dark mode class
    function initializeToggle() {
        if (document.body.classList.contains('dark-mode')) {
            toggleswitch.checked = true;
        } else {
            toggleswitch.checked = false;
        }
    }

    // Run the initialization function after the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', initializeToggle);
