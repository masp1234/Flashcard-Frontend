'use strict'

class FlashcardRenderer {

constructor() {
}
flashcardElements = []
flashcards = []
itemContainer = document.querySelector('#item-container');








getFlashcards = deck => {
    this.itemContainer.replaceChildren();

    deck.flashcards.forEach(flashcard => {

        this.flashcards.push(flashcard);

        const flashcardEle = document.createElement('div');
        flashcardEle.classList.add('flashcard');
        flashcardEle.classList.add('not-flipped');
        
        const flashcardQuestionTextEle = document.createElement('p');
        flashcardQuestionTextEle.classList.add('text');

        const flashcardAnswerTextEle = document.createElement('p');
        flashcardAnswerTextEle.classList.add('text');
        
        const flashcardPointsEle = document.createElement('p');
        flashcardPointsEle.classList.add('text');
    
        flashcardQuestionTextEle.textContent = flashcard.questionText;
        flashcardAnswerTextEle.textContent = flashcard.answerText;
        flashcardPointsEle.textContent = flashcard.points;

        flashcardEle.appendChild(flashcardQuestionTextEle);
        flashcardEle.appendChild(flashcardPointsEle);

        this.itemContainer.appendChild(flashcardEle);

        flashcardEle.addEventListener("click", () => {
            if (flashcardEle.classList.contains('not-flipped')) {
                flashcardEle.replaceChild(flashcardAnswerTextEle, flashcardQuestionTextEle);
                flashcardEle.classList.replace('not-flipped', 'flipped');
                
            }
            else if (flashcardEle.classList.contains('flipped')) {
                flashcardEle.replaceChild(flashcardQuestionTextEle, flashcardAnswerTextEle);
                flashcardEle.classList.replace('flipped', 'not-flipped');
                
            }
        })

        this.flashcardElements.push(flashcardEle); 
    } )

    console.log(this.flashcards);
    const multipleChoiceRenderer = new MultipleChoiceRenderer(this.flashcards);
    
    
}
}
