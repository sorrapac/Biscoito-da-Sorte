// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const openCookie = document.querySelector("#openCookie")
const btnTry = document.querySelector("#btnTry")
const phrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
]
let randomNumber = Math.round(Math.random() * 10)
let randomPhrase = document.querySelector("#randomPhrase")


//eventos
openCookie.addEventListener('click', generatePhrase)
btnTry.addEventListener('click', toggleScreen)

//funções
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function generatePhrase() {
    toggleScreen();

    generateRandomPhrase = Math.floor(Math.random() * phrases.length);

    randomPhrase.innerText = phrases[generateRandomPhrase];
}