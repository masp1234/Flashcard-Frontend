'use strict'

class FlashcardRenderer {

constructor() {
}
flashcardElements = []
flashcards = []

getFlashcards = deck => {
    itemContainer.replaceChildren();

    deck.flashcards.forEach(flashcard => {

        this.flashcards.push(flashcard);

        let flashcardElement = this.createFlashcardElement(flashcard);
    
        itemContainer.appendChild(flashcardElement);

        flashcardElement.addEventListener("click", () => {
            this.flipFlashcard(flashcardElement, flashcard);
        })

        this.flashcardElements.push(flashcardElement); 
    } )

    const multipleChoiceRenderer = new MultipleChoiceRenderer(this.flashcards);
    
    
}

createFlashcardElement(flashcard) {
    const flashcardElement = document.createElement('div');
    const flashcardContentElement = document.createElement('div');
    flashcardContentElement.classList.add('flashcard-content');
    flashcardElement.appendChild(flashcardContentElement);
    flashcardElement.classList.add('flashcard');
    flashcardElement.classList.add('not-flipped');
    
    flashcardContentElement.innerHTML += `<p class="text" id="question-text">${flashcard.questionText}</p>`
    return flashcardElement
}

flipFlashcard(flashcardElement, flashcard) {
    const flashcardContentElement = flashcardElement.querySelector('.flashcard-content');

    if (flashcardElement.classList.contains('not-flipped')) {
        flashcardContentElement.innerHTML = `<p class="text">${flashcard.answerText}</p>`;
        flashcardElement.classList.replace('not-flipped', 'flipped');
        
    }
    else if (flashcardElement.classList.contains('flipped')) {
        flashcardContentElement.innerHTML = `<p class="text">${flashcard.questionText}</p>`;
        flashcardElement.classList.replace('flipped', 'not-flipped');
        
    }
}
}
