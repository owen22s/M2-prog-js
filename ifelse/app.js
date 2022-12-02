
let headline = document.getElementById("newstitle")
let randomGetal = Math.random();
if (randomGetal == 0){
    headline.style.backgroundColor ="red";
}
if (randomGetal < 0.2){
    headline.style.backgroundColor = "green";
}
if (randomGetal >= 0.2 && randomGetal <=0.6){
    headline.style.backgroundColor = "black";
}
if (randomGetal > 0.6 ){
    headline.style.backgroundColor = "pink";
}
     

