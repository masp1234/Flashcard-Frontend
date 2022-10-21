var getFlashcards = deck => {
    itemContainer.replaceChildren();

    deck.flashcards.forEach(flashcard => {
        const flashcardEle = document.createElement('div');
        flashcardEle.classList.add('flashcard');
        flashcardEle.classList.add('not-flipped');
        
        const flashcardQuestionTextEle = document.createElement('p');
        flashcardQuestionTextEle.classList.add('text');

        const flashcardAnswerTextEle = document.createElement('p');
        flashcardAnswerTextEle.classList.add('text');
        
        const flashcardPointsEle = document.createElement('p');
        flashcardPointsEle.classList.add('text');

        const activateMultipleChoiceButton = document.createElement('button');
        activateMultipleChoiceButton.addEventListener("click", activateMultipleChoice);

        flashcardQuestionTextEle.textContent = flashcard.questionText;
        flashcardAnswerTextEle.textContent = flashcard.answerText;
        flashcardPointsEle.textContent = flashcard.points;

        flashcardEle.appendChild(flashcardQuestionTextEle);
        flashcardEle.appendChild(flashcardPointsEle);
        
        
        itemContainer.appendChild(flashcardEle);

        flashcardEle.addEventListener("click", () => {
            if (flashcardEle.classList.contains('not-flipped')) {
                flashcardEle.replaceChild(flashcardAnswerTextEle, flashcardQuestionTextEle);
                flashcardEle.classList.replace('not-flipped', 'flipped');
                
            }
            else {
                flashcardEle.replaceChild(flashcardQuestionTextEle, flashcardAnswerTextEle);
                flashcardEle.classList.replace('flipped', 'not-flipped');
                
            }

        })
    } ) 
    
}

const activateMultipleChoice = () => {
    
}