'use strict'

class DeckRenderer {

    endpointUrl = BASE_URL + "deck/all";
    constructor() {
        this.data = this.fetchData();
    }




 itemContainer = document.querySelector("#item-container")

 container = document.querySelector('.container');

fetchData() {
    console.log('hallo?')
    fetchDataByUrl(this.endpointUrl).then (decks => {
        this.renderDecks(decks);
    })
}
renderDecks = decks => {

    
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
        
        this.itemContainer.appendChild(deckEle); 
        
        
        }
        const deckElements = document.querySelectorAll('.deck');
        this.addEventListenersToDeckElements(deckElements, decks);
    
    

}

addEventListenersToDeckElements = (deckElements, decks) => {
    deckElements.forEach(function(deckEle, index) {
        deckEle.addEventListener('click', () => {
            const flashcardRenderer = new FlashcardRenderer();
            flashcardRenderer.getFlashcards(decks[index]);
            
        })
    })
    };

}

var deckRenderer = new DeckRenderer();
console.log(deckRenderer);


