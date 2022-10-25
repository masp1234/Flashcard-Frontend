'use strict'

class MultipleChoiceRenderer{
    constructor(flashcards) {
        this.flashcards = flashcards;
        this.createMultipleChoiceButton();

    }

playerPoints = 0;
numberOfAnswers = 4;

createMultipleChoiceButton() {
    const multipleChoiceButton = document.createElement('button');
    multipleChoiceButton.id = 'multiple-choice-button';
    container.appendChild(multipleChoiceButton);

    this.addEventListenerToMultipleChoiceButton(multipleChoiceButton);
  
}

// TODO clean den her del op og lav det om til flere SOLIDE metoder

addEventListenerToMultipleChoiceButton(multipleChoiceButton) {
    
    multipleChoiceButton.addEventListener("click", () => {
        itemContainer.replaceChildren();

        this.flashcards.forEach(flashcard => {
            const flashcardEle = document.createElement('div');
            flashcardEle.classList.add('flashcard');

            const flashcardQuestionTextEle = document.createElement('p');
            flashcardQuestionTextEle.classList.add('text');
            flashcardQuestionTextEle.textContent = flashcard.questionText;
    
            flashcardEle.appendChild(flashcardQuestionTextEle);

            const listOfAnswers = this.getListOfAnswers(this.numberOfAnswers, flashcard.answerText);
            
            listOfAnswers.forEach(answer => { 
            const answerElement = this.createAnswerElement(answer);
                
            answerElement.addEventListener('click', () => {
                    let answer = answerElement.textContent;
                    if (answer === flashcard.answerText) {
                        this.playerPoints += flashcard.points;
                        console.log(this.playerPoints);
                        flashcardEle.remove();

                    }
                })
                
                flashcardEle.appendChild(answerElement);
            })
            itemContainer.appendChild(flashcardEle);
        })
        });
}
createAnswerElement(answer) {    
    const answerElement = document.createElement('p');
                
    answerElement.classList.add('text');
    answerElement.classList.add('answer');
    answerElement.textContent = answer;

    return answerElement;
    
}

getListOfAnswers(numberOfAnswers, rightAnswer) {
    let listOfAnswers = new Set();
    listOfAnswers.add(rightAnswer);

    while (listOfAnswers.size < numberOfAnswers) {
        let randomNumber = Math.floor(Math.random() * this.flashcards.length);
        listOfAnswers.add(this.flashcards[randomNumber].answerText);
        
    }
    

    // får et array fra settet, "shuffler" arrayet og returnerer til sidst
    
    return Array.from(listOfAnswers).sort(
        () => Math.random() - 0.5);
}

}


