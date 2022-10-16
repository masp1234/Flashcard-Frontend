var getFlashcards = deck => {
    itemContainer.replaceChildren();

    deck.flashcards.forEach(flashcard => {
        flashcardEle = document.createElement('div');
        flashcardEle.classList.add('flashcard');
        


        flashcardQuestionTextEle = document.createElement('p');
        flashcardQuestionTextEle.classList.add('text');
        flashcardAnswerTextEle = document.createElement('p');
        flashcardAnswerTextEle.classList.add('text');
        flashcardPointsEle = document.createElement('p');
        flashcardPointsEle.classList.add('text');

        flashcardQuestionTextEle.textContent = flashcard.questionText;
        flashcardAnswerTextEle.textContent = flashcard.answerText;
        flashcardPointsEle.textContent = flashcard.points;

        flashcardEle.appendChild(flashcardQuestionTextEle);
        flashcardEle.appendChild(flashcardAnswerTextEle);
        flashcardEle.appendChild(flashcardPointsEle);
        
        
        itemContainer.appendChild(flashcardEle);
        
    } ) 
    
}