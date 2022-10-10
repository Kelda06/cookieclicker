const info = document.getElementById("info");
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cookieClickerMultiplier = document.getElementById("cookieClickerMultiplier");
const cookieClickerMultiplier2 = document.getElementById("cookieClickerMultiplier2");

let numberOfCookies = 0;
let cookieInsrease = 1;

cookie.onclick = () => {
    numberOfCookies += cookieInsrease; 
    counter.innerHTML = numberOfCookies
}
cookieClickerMultiplier.onclick = () =>{
    if (numberOfCookies >=50){
        numberOfCookies -= 50; // numberOfCookies = NumberOfCookies - 50;
        cookieInsrease ++;
        counter.innerHTML = numberOfCookies;
        let t = cookieInsrease - 1;
        info.innerHTML = `You bouht a new uprage with turbo ${t}`
    }



}

cookieClickerMultiplier2.onclick = () =>{
    if (numberOfCookies >=50){
        numberOfCookies -= 100; // numberOfCookies = NumberOfCookies - 50;
        cookieInsrease ++;
        counter.innerHTML = numberOfCookies;
        let t = cookieInsrease - 1;
        info.innerHTML = `You bouht a new uprage with turbo ${t}`
    }



}