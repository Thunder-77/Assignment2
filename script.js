
let quo = document.getElementsByClassName("quotes");
console.log(quo);
let button = document.getElementById("btn");
const url = "https://api.quotable.io/random";

console.log(quo);
let Quote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quo.innerText= item.content;
      console.log(quo.innerText);
    });
};
window.addEventListener("load", Quote);
button.addEventListener("click", Quote);

    
    

