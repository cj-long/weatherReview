const response = await fetch(url);
const data = await response.json();
alert(data);

const button = document.querySelector("#searchBtn");
const cityInput = document.querySelector("#city");
const result = document.querySelector ("#result");

button.addEventListener("click", function () { 
    result.textContent = "You typed: " + cityInput.value;
});

button.addEventListener("click", function() {
    alert("Search button clicked!");
});