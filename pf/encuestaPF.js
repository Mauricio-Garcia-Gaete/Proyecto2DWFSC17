function ejecutarPrograma() {
    const numeroDePregunta = parseInt(prompt("¿Cuántas preguntas desea realizar?"));
    const preguntas = [];

    for (let i = 0; i < numeroDePreguntas; i++) {
        const textoPregunta = prompt(`Ingrese la pregunta ${i + 1}:`); 
        const opciones = prompt(`Ingrese las opciones para la pregunta ${i + 1} separadas por coma (,):`)
        const pregunta = funcion();//crear funcion
        preguntas.push(pregunta);
    }

    const encuesta = funcion(); //crear  funcion

    let seguirVotando = true;
    while (seguirVotando) {
        for (let i = 0;  i < numeroDePreguntas; i++) {
            votar(encuesta.preguntas[i]);
        }
        seguirVotando = confirm("¿Desea seguir votando?");
    }
}

