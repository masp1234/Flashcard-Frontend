
function createMultipleChoiceButton() {
    const activateMultipleChoiceButton = document.createElement('button');
    activateMultipleChoiceButton.id = 'activate-multiple-choice-button';
    container.appendChild(activateMultipleChoiceButton);

    activateMultipleChoiceButton.addEventListener("click", () => {
        alert('hello');
        itemContainer.replaceChildren();

        flashcards.forEach(flashcard => {
            const flashcardEle = document.createElement('div');
            flashcardEle.classList.add('flashcard');

            const flashcardQuestionTextEle = document.createElement('p');
            flashcardQuestionTextEle.classList.add('text');
            flashcardQuestionTextEle.textContent = flashcard.questionText;
    
            flashcardEle.appendChild(flashcardQuestionTextEle);

            let listOfAnswers = getListOfAnswers(4);
            listOfAnswers.forEach(answer => {
                answerElement = document.createElement('p');
                answerElement.classList.add('text');
                answerElement.textContent = answer;
                
                flashcardEle.appendChild(answerElement);
            })
        

            itemContainer.appendChild(flashcardEle);
        })

            /* flashcardElements.forEach(flashcardEle => {
                if (flashcardEle.classList.contains('not-flipped')) {
                    flashcardEle.classList.replace('not-flipped', 'multiple-choice-activated');
    
                }
                else {
                    flashcardEle.classList.replace('flipped', 'multiple-choice-activated');
                }
                console.log(flashcardEle);
            }) */
            

        });
}

function getListOfAnswers(numberOfAnswers) {
    let listOfAnswers = new Set();

    while (listOfAnswers.size < numberOfAnswers) {
        let randomNumber = Math.floor(Math.random() * flashcards.length);
        listOfAnswers.add(flashcards[randomNumber].answerText);
        console.log(randomNumber);
    }
    
    return listOfAnswers;
}

