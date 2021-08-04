const trivialData = [
    {
        question: "¿Cuál es la capital de España?",
        a: "Sevilla",
        b: "Barcelona",
        c: "Madrid",
        d: "Toledo",
        correct: "c",
    },
    {
        question: "¿En qué continente está Andorra?",
        a: "America",
        b: "Europa",
        c: "Africa",
        d: "España",
        correct: "b",
    },

];

const trivial = document.getElementById("trivial");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currenttrivial = 0;
let score = 0;

loadtrivial();

function loadtrivial() {
    deselectAnswers();

    const currenttrivialData = trivialData[currenttrivial];

    questionEl.innerText = currenttrivialData.question;
    a_text.innerText = currenttrivialData.a;
    b_text.innerText = currenttrivialData.b;
    c_text.innerText = currenttrivialData.c;
    d_text.innerText = currenttrivialData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === trivialData[currenttrivial].correct) {
            score++;
        }

        currenttrivial++;
        if (currenttrivial < trivialData.length) {
            loadtrivial();
        } else {
            trivial.innerHTML = `
                <h2>Has acertado ${score}/${trivialData.length} preguntas correctas.</h2>
                
                <button onclick="location.reload()">Reiniciar</button>
            `;
        }
    }
});