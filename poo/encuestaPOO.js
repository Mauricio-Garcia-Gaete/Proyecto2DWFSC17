class Question {
    constructor(questionText, options) {
        this.questionText = questionText;
        this.options = options.map((option) => option.trim());
        this.results = {};
    }

    addVote(selectedOption) {
        if (this.options.includes(selectedOption)) {
            this.results[selectedOption] = (this.results[selectedOption] || 0) + 1;
        } else {
            console.log("La opción seleccionada no es válida");
        }
    }

    showResults() {
        console.log(`Los resultados para la pregunta "${this.questionText}":`);
        this.options.forEach((option) => {console.log(`Opción "${option}": ${this.results[option] || 0} votos`);})
    }
}

class Poll {
    constructor() {
        this.questions = [];
    }

    addQuestion(questionText, options) {
        const question = new Question(questionText, options);
        this.questions.push(question);
    }

    excecute() {
        let continueVoting = true;
        while (continueVoting) {
            this.questions.forEach((question) => this.toVote(question));
            continueVoting = confirm("¿Desea seguir votando?");
        }
        this.showFinalResults();
    }

    toVote(question) {
        const selectedOption = prompt(`Pregunta: ${question.questionText}\nSeleccione una opción ${question.options.join(", ")}):`);
        if (selectedOption !== null) {
            question.addVote(selectedOption.trim());
        } else {
            console.log("Votación cancelada.");
        }
    }

    showFinalResults() {
        console.log("Resultado final de la encuesta:");
        this.questions.forEach((question) => question.showResults());
    }
}

const createPoll = () => {
    const poll = new Poll();
    let numOfQuestions = parseInt(prompt("¿Cuántas preguntas deseas realizar? (Mínimo 8)"));
    while (numOfQuestions < 8) {
        numOfQuestions = parseInt(prompt("Faltan preguntas.\n¿Cuántas preguntas deseas realizar? (Mínimo 8)"));
    }

    for (let i = 0; i < numOfQuestions; i++) {
        const questionText = prompt(`Ingrese la pregunta ${i + 1}:`);
        const options = prompt(`Ingrese las opciones para la pregunta ${i  + 1} separadas por coma (,):`).split(",");
        poll.addQuestion(questionText, options);
    }

    return poll;
}

const poll = createPoll();
poll.excecute();