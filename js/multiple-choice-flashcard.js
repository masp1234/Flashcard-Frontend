let playerPoints = 0;

let numberOfWrongAnswers = 4;


function createMultipleChoiceButton() {
    const activateMultipleChoiceButton = document.createElement('button');
    activateMultipleChoiceButton.id = 'activate-multiple-choice-button';
    container.appendChild(activateMultipleChoiceButton);

    activateMultipleChoiceButton.addEventListener("click", () => {
        itemContainer.replaceChildren();

        flashcards.forEach(flashcard => {
            const flashcardEle = document.createElement('div');
            flashcardEle.classList.add('flashcard');

            const flashcardQuestionTextEle = document.createElement('p');
            flashcardQuestionTextEle.classList.add('text');
            flashcardQuestionTextEle.textContent = flashcard.questionText;
    
            flashcardEle.appendChild(flashcardQuestionTextEle);

            let listOfAnswers = getListOfAnswers(numberOfWrongAnswers, flashcard.answerText);
            listOfAnswers.forEach(answer => {
                const answerElement = document.createElement('p');
                
                answerElement.classList.add('text');
                answerElement.classList.add('answer');
                answerElement.textContent = answer;

                answerElement.addEventListener('click', () => {
                    let answer = answerElement.textContent;
                    if (answer === flashcard.answerText) {
                        playerPoints += flashcard.points;
                        console.log(playerPoints);
                        flashcardEle.remove();

                    }
                })
                
                flashcardEle.appendChild(answerElement);
            })
            
            
        

            itemContainer.appendChild(flashcardEle);
        })
        });
}

function getListOfAnswers(numberOfAnswers, rightAnswer) {
    let listOfAnswers = new Set();
    listOfAnswers.add(rightAnswer);

    while (listOfAnswers.size < numberOfAnswers) {
        let randomNumber = Math.floor(Math.random() * flashcards.length);
        listOfAnswers.add(flashcards[randomNumber].answerText);
        
    }
    

    // får et array fra settet, "shuffler" arrayet og returnerer til sidst
    
    return Array.from(listOfAnswers).sort(
        () => Math.random() - 0.5);
}


