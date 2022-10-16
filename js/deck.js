const itemContainer = document.querySelector("#item-container")

fetchDataByUrl(BASE_URL + "deck/all").then (decks => {
    renderDecks(decks);
    

})

const renderDecks = decks => {

    console.log(decks);
    for (var i = 0; i < decks.length; i++) {
         
         let deckEle = document.createElement('div');
         deckEle.classList.add('deck');
       
        let deckNameEle = document.createElement('p');
        deckNameEle.classList.add('text')
        deckNameEle.textContent = decks[i].name;
        deckEle.appendChild(deckNameEle);
        
        let deckCategoryEle = document.createElement('p');
        deckCategoryEle.classList.add('text')
        deckCategoryEle.textContent = decks[i].category;
        deckEle.appendChild(deckCategoryEle);
        
        itemContainer.appendChild(deckEle); 
        
        console.log(deckEle);
        }
        deckElements = document.querySelectorAll('.deck');
        console.log(deckElements);
        addEventListenersToDeckElements(deckElements, decks);
    
    

}

var addEventListenersToDeckElements = ((deckElements, decks) => {
    deckElements.forEach(function(deckEle, index) {
        deckEle.addEventListener('click', () => {
            getFlashcards(decks[index]);
        })
    })
    });


