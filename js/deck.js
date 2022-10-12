const deckContainer = document.querySelector("#deck-container")

fetchDataByUrl(BASE_URL + "deck/all").then (data => {
    renderDecks(data);
    

})

const renderDecks = data => {

    console.log(data);
    for (var i = 0; i < data.length; i++) {
         
         let deckElement = document.createElement('div');
         deckElement.classList.add('deck');
         deckElement.addEventListener("click", e => {
            // Hvad sker der her?? hvorfor er den ene et object, men den anden undefined??
            console.log(data);
            console.log(data[i])
           
         });
    
        let deckName = document.createElement('p');
        deckName.classList.add('text')
        deckName.textContent = data[i].name;
        deckElement.appendChild(deckName);
        
        let deckCategory = document.createElement('p');
        deckCategory.classList.add('text')
        deckCategory.textContent = data[i].category;
        deckElement.appendChild(deckCategory);
        
        deckContainer.appendChild(deckElement); 
        
        console.log(deckElement);
        }
    
    

}


