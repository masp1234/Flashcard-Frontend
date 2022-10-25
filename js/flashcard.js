'use strict'

class FlashcardRenderer {

constructor() {
}
flashcardElements = []
flashcards = []


// Find ud af hvorfor flashcards forsvinder efter 2 klik. 
// Først går de fra not-flipped til flipped, og derefter bliver de væk når man klikker på dem.
// Prøv at debug
// note: både spørgsmål og svar vises på samme tid. Tjek tidligere kode på github

getFlashcards = deck => {
    itemContainer.replaceChildren();

    deck.flashcards.forEach(flashcard => {

        this.flashcards.push(flashcard);

        let flashcardElement = this.createFlashcardElement(flashcard);
    
        itemContainer.appendChild(flashcardElement);

        flashcardElement.addEventListener("click", () => {
            if (flashcardElement.classList.contains('not-flipped')) {
                flashcardElement.replaceChild(document.getElementById('answer-text'),
                                                document.getElementById('question-text'));
                flashcardElement.classList.replace('not-flipped', 'flipped');
                
            }
            else if (flashcardElement.classList.contains('flipped')) {
                flashcardElement.replaceChild(document.getElementById('question-text'),
                                                document.getElementById('answer-text'));
                flashcardElement.classList.replace('flipped', 'not-flipped');
                
            }
        })

        this.flashcardElements.push(flashcardElement); 
    } )

    const multipleChoiceRenderer = new MultipleChoiceRenderer(this.flashcards);
    
    
}

createFlashcardElement(flashcard) {
    const flashcardElement = document.createElement('div');
    flashcardElement.classList.add('flashcard');
    flashcardElement.classList.add('not-flipped');
    

    flashcardElement.innerHTML += `<p class="text" id="question-text">${flashcard.questionText}</p>`
    flashcardElement.innerHTML += `<p class="text" id="answer-text">${flashcard.answerText}</p>`
    flashcardElement.innerHTML += `<p class="text" id="points">${flashcard.points}</p>`

    return flashcardElement
}
}
