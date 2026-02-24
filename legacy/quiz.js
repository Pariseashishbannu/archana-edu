const questions = [
    {
        question: "Which of the following is an example of a synchronous communication tool?",
        options: ["Email", "Forum", "Instant Messaging", "Discussion Board"],
        answer: 2
    },
    {
        question: "The main objective of teaching is:",
        options: ["To give information", "To prepare students for jobs", "To help students in getting good marks", "To develop students' ability to think"],
        answer: 3
    },
    {
        question: "A research paper is a brief report of research work based on:",
        options: ["Primary Data only", "Secondary Data only", "Both Primary and Secondary Data", "None of the above"],
        answer: 2
    },
    {
        question: "Which of the following belongs to the category of 'Non-probability sampling'?",
        options: ["Simple random sampling", "Cluster sampling", "Quota sampling", "Systematic sampling"],
        answer: 2
    },
    {
        question: "Internalization of values is primarily associated with:",
        options: ["Cognitive domain", "Affective domain", "Psychomotor domain", "Reflective domain"],
        answer: 1
    },
    {
        question: "In the context of IT, what is the full form of URL?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Unified Resource Link", "Uniform Radio Link"],
        answer: 1
    },
    {
        question: "Sustainable Development Goals (SDGs) are to be achieved by:",
        options: ["2020", "2025", "2030", "2050"],
        answer: 2
    },
    {
        question: "Choice Based Credit System (CBCS) was introduced in India by:",
        options: ["UGC", "NCERT", "NCTE", "AICTE"],
        answer: 0
    },
    {
        question: "Which type of evaluation is used to monitor the learning process during instruction?",
        options: ["Summative", "Formative", "Placement", "Diagnostic"],
        answer: 1
    },
    {
        question: "National Knowledge Commission (NKC) was headed by:",
        options: ["D.S. Kothari", "Sam Pitroda", "Yashpal", "C.R. Rao"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let timeLeft = 3600; // 60 minutes in seconds
let timerId;

const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const qNumberText = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

function initQuiz() {
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.question;
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = `option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`;
        div.innerText = opt;
        div.onclick = () => selectOption(index);
        optionsContainer.appendChild(div);
    });

    qNumberText.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.innerText = currentQuestionIndex === questions.length - 1 ? 'Submit Test' : 'Next Question';
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerId);
    let score = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === questions[i].answer) score++;
    });

    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    document.getElementById('final-score').innerText = score;

    const msg = score >= 7 ? "Excellent Score! You are well-prepared." :
        score >= 4 ? "Good job! A bit more practice will help." :
            "Keep studying, you can do better!";
    document.getElementById('result-message').innerText = msg;
}

nextBtn.onclick = () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        if (confirm("Are you sure you want to submit the test?")) {
            submitQuiz();
        }
    }
};

prevBtn.onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
};

initQuiz();
