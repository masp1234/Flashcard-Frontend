class FlashCardHandler {
    constructor() {

    }



post = async (flashcard) => {
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(flashcard),
    };

    await makeRequest(`${BASE_URL}flashcard/deck/1`, settings)
    console.log('postet')
}


postTest = async () => {

    const flashcard = {
        questionText: "test",
        answerText: "test",
        points: 5
    }

    for (let index = 0; index < 200; index++) {
        await flashcardHandler.post(flashcard);
        
    }

}
}

const flashcardHandler = new FlashCardHandler();

async function logAfterTest() {
    await flashcardHandler.postTest();
    console.log("skal først vises efter de alle er postet");
}

logAfterTest();





