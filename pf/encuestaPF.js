// Función flecha para poder crear una pregunta.
const createQuestion = (questionText, options)=> {
    return {
      questionText: questionText,
      options: options,
      results: {},
    };
  }
   
  // Función flecha para que contenga todas las preguntas de la encuenta.
  const createPoll = (questions) => {
    return {
        questions: questions,
    };
  }
   
  // Función para agregar un voto a una pregunta en una encuesta
  function addVote(question, selectedOption) {
    if (question.options.includes(selectedOption)) {
      if (question.results[selectedOption]) {
        question.results[selectedOption]++;
      } else {
        question.results[selectedOption] = 1;
      }
      showResults(question);
    } else {
      console.log("La opción seleccionada es incorrecta.");
    }
  }
   
  // Función para mostrar los resultados de una pregunta
  function showResults(question) {
    console.log(`Los resultados para la pregunta "${question.questionText}":`);
    for (let option of question.options) {
      console.log(`Opción "${option}": ${question.results[option] || 0} votos`);
    }
  }
   
  // Función para que un usuario pueda votar en una pregunta
  function toVote(question) {
    const selectedOption = prompt(`Pregunta: ${question.questionText}\nSeleccione una opción (${question.options.join(", ")}):`);
    
    if (selectedOption !== null) {
        addVote(question, selectedOption.trim());
    } else {
        console.log("Votación cancelada");
    }
    
  }

   
  // Función para poder ejecutar la encuesta 
  function runProgram() {
    const numOfQuestions = parseInt(prompt("¿Cuantas preguntas desea realizar?"))
    const questions = [];
   
    for (let i = 0; i < numOfQuestions; i++) {
      const questionText = prompt(`Ingrese la pregunta ${i + 1}:`);
      const options = prompt(`Ingrese las opciones para la pregunta ${i + 1} separadas por coma (,):`).split(",").map((option) => option.trim());
      const question = createQuestion(questionText, options);
      questions.push(question);
    }
   
    const poll = createPoll(questions);
   
    let continueVoting = true;
    while (continueVoting) {
      for (let i = 0; i < numOfQuestions; i++) {
        toVote(poll.questions[i]);
      }
      continueVoting = confirm("¿Desea seguir votando?");
    }

    console.log("Los resultados finales de la encuesta son:");
    poll.questions.forEach(showResults);
  }
   
  runProgram();
