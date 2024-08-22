let arr = [
  "Initializing Hack tool..................",
  "Connecting to Facebook........",
  "Connecting to server1..................",
  "Connection failed. Retrying..................",
  "Connection to server2..................",
  "Connected Successfully..................",
  "Username _raju.m_..................",
  "Trying Brute Force..................",
  "200K passwords tried..................",
  "Match not found..................",
  "Another 200K passwords tried..................",
  "Match not found..................",
  "Another 200K passwords tried..................",
  "Match not found..................",
  "Another 200K passwords tried..................",
  "Match found..................",
  "Accessing Account..................",
];

let main = document.getElementsByClassName("main")[0];

const sleep = async(n)=>{
    let p1= new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(true)},n*1000)
    },)
    return p1;
}

const print = async (message) => {
    await sleep(2);
    main.innerHTML += message + "<br></br>";
};

const delayprint = async () => {
  for (let i = 0; i < arr.length; i++) {
      await print(arr[i]);
  }
};
delayprint();
