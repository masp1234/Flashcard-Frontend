const deckContainer = document.querySelector("#deck-container")

fetchDataByUrl(BASE_URL + "deck/all").then (data => {
    renderDecks(data);
    

})

const renderDecks = data => {

    console.log(data);
    for (var i = 0; i < data.length; i++) {
         
         let deckEle = document.createElement('div');
         deckEle.classList.add('deck');
         deckEle.addEventListener("click", e => {
            // Hvad sker der her?? hvorfor er den ene et object, men den anden undefined??
            console.log(data);
            console.log(data[i])
           
         });
    
        let deckNameEle = document.createElement('p');
        deckNameEle.classList.add('text')
        deckNameEle.textContent = data[i].name;
        deckEle.appendChild(deckNameEle);
        
        let deckCategoryEle = document.createElement('p');
        deckCategoryEle.classList.add('text')
        deckCategoryEle.textContent = data[i].category;
        deckEle.appendChild(deckCategoryEle);
        
        deckContainer.appendChild(deckEle); 
        
        console.log(deckEle);
        }
    
    

}


