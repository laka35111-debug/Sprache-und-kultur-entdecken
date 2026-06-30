// Search
const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".unit-card").forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(value) ? "block":"none";

});

});

}

// Dark Mode

const darkBtn=document.getElementById("darkBtn");

if(darkBtn){

darkBtn.onclick=function(){

document.body.classList.toggle("dark");

}

}
