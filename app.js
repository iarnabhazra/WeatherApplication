
const msg = document.getElementById("message");
const list = document.getElementById("cities");
const apiKey = '8038d398cd203830876e9b4a0bd04c3e';

form.addEventListener('submit', (event) => {
    e.preventDefault();
    let cityName = input.value;
    
    const listItems = list.querySelectorAll(".api-call .city");
    const listItemArary = Array.from(listItems);
    if(listItemArary.length > 0) {
        const filteredCity = listItemArary.filter(city => {
            let contents = "";
            if(cityName.includes(",")) {
                
            }
        })
    }
}) 