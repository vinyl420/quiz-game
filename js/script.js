function checkAnswers() {
    const answerRadios = document.querySelectorAll('.answer');  // Select all elements with the answer class
    let score = 0;  // Declare score variable as 0

    answerRadios.forEach((radio) => {
        if (radio.checked) {
            const questionId = radio.parentElement.id; // Get the question ID from the parent element
            const correctAnswer = document.getElementById(questionId).querySelector('[data-correct]'); // Check whether the answer has the data-correct attribute

            if (radio === correctAnswer) {
                score++; // Add +1 score if the answer is correct
            }
        }
    });

    const totalQuestions = document.querySelectorAll('.questionTitle').length; // Get the total number of questions

    const resultText = `You scored ${score} out of ${totalQuestions}`; // Create the result text

    document.getElementById('goodJob').style.display = 'flex';
    document.getElementById('result').innerText = resultText; // Display the result text
}
