class MultipleChoiceRenderer{
    constructor(flashcards) {
        this.flashcards = flashcards;
        this.createMultipleChoiceButton();

    }

itemContainer = document.querySelector("#item-container")
container = document.querySelector('.container');
playerPoints = 0;
numberOfWrongAnswers = 4;


createMultipleChoiceButton() {
    const activateMultipleChoiceButton = document.createElement('button');
    activateMultipleChoiceButton.id = 'activate-multiple-choice-button';
    this.container.appendChild(activateMultipleChoiceButton);

    activateMultipleChoiceButton.addEventListener("click", () => {
        this.itemContainer.replaceChildren();

        this.flashcards.forEach(flashcard => {
            const flashcardEle = document.createElement('div');
            flashcardEle.classList.add('flashcard');

            const flashcardQuestionTextEle = document.createElement('p');
            flashcardQuestionTextEle.classList.add('text');
            flashcardQuestionTextEle.textContent = flashcard.questionText;
    
            flashcardEle.appendChild(flashcardQuestionTextEle);

            let listOfAnswers = this.getListOfAnswers(this.numberOfWrongAnswers, flashcard.answerText);
            listOfAnswers.forEach(answer => {
                const answerElement = document.createElement('p');
                
                answerElement.classList.add('text');
                answerElement.classList.add('answer');
                answerElement.textContent = answer;

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
            
            
        

            this.itemContainer.appendChild(flashcardEle);
        })
        });
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


