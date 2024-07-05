let input = document.querySelector("input");
let button = document.querySelector("button");
let select1 = document.querySelector(".select1");
let select2 = document.querySelector(".select2");
let h2 = document.querySelector("h2");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let amount = Number(input.value);
    let fromCur = select1.value;
    let toCur = select2.value;

    fetch(`https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${fromCur}&currencies=${toCur}`, {
        headers: {
            "x-rapidapi-key": "fb323d50aemsh021cce6e22c7eccp14cda2jsn5f18a9634617"
        }
    })

    .then((res) => res.json())
    .then((data) =>{
        let result = data.result[toCur.toUpperCase()] * amount;
        h2.textContent = result.toFixed(2) + " " + toCur.toUpperCase();
    })
});