console.log("hello world");

const handleinput = (event) => {
  event.preventDefault();
  let city1 = document.getElementsByTagName("input")[0].value;

  let url = `https://api.postalpincode.in/postoffice/${city1}`;

  let res = fetch(url);
  res
    .then((city) => {
      return city.json();
    })
    .then((city) => {
        // console.log(city)
        // console.log(city[0].Message)
        // console.log(city[0].PostOffice)
        // console.log(city[0].PostOffice[1].Name)
        // console.log(city[0].Status)

        // for(item in city[0]) {
        //     console.log(item.Message)
        // }

       
        let arr = city[0].PostOffice;
        // console.log(arr.length)
        let inhtml = ""; 
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]); // Log each post office name
  
            inhtml += `
              <div class="card mb-3" style="width: 18rem;" style = "margin: 10px">
                <div class="card-body">
                  <h5 class="card-title" style="color: blue;">${arr[i].Name}</h5>
                  <p class="card-text">${arr[i].BranchType}</p>
                  <p class="card-text">${arr[i].Circle}</p>
                  <p class="card-text"> ${arr[i].District}</p>
                  <p class="card-text">${arr[i].Division}</p>
                  <p class="card-text"  style="color: blue;">${arr[i].Pincode}</p>
                  <p class="card-text"> ${arr[i].Region}</p>
                  <p class="card-text">${arr[i].State}</p>
                </div>
              </div>
            `;
        }
        // console.log(inhtml); // Log the final HTML string
        const postoffice = document.getElementById("postoffice");
        postoffice.innerHTML = inhtml;
        city1="";

    }).catch((ele)=>{
      alert("enter valid city name  ", ele)
      city1="";
    })
};



const handlepincode = (event)=>{
  event.preventDefault();
  let pincode = document.querySelector(".input1").value;
  let list = document.querySelector("#pincode");
  pincode = Number(pincode);
  console.log('After conversion:', typeof pincode);
  
  let url = `https://api.postalpincode.in/pincode/${pincode}`;
  let res = fetch(url);
  res.then((value)=>{
    return value.json();
  }).then((city)=>{
    let arr = city[0].PostOffice
    let inhtml = ""; 
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // Log each post office name

        inhtml += `
          <div class="card mb-3" style="width: 18rem;" style = "margin: 10px">
            <div class="card-body">
              <h5 class="card-title" style="color: blue;">${arr[i].Name}</h5>
              <p class="card-text">${arr[i].BranchType}</p>
              <p class="card-text">${arr[i].Circle}</p>
              <p class="card-text"> ${arr[i].District}</p>
              <p class="card-text">${arr[i].Division}</p>
              <p class="card-text"  style="color: blue;">${arr[i].Pincode}</p>
              <p class="card-text"> ${arr[i].Region}</p>
              <p class="card-text">${arr[i].State}</p>
            </div>
          </div>
        `;
    }
    console.log(arr)
    list.innerHTML = inhtml;
  })
}


// 2Q



// let a = prompt("enter your note");
// localStorage.setItem('note',a);

// let b= confirm("do you want to delete note")
// if(b){
//   localStorage.removeItem('note')
//   alert("note deleted")
// }
