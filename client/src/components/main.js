// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['DZIEŃ DOBRY !!!', 'FAJNIE ŻE JESTEŚ !! ;)', 'ZACZYNAMY!!!']
let variableHelper = 1;
let writingHelper = 0;
let indexTyping = 9999;
const length = txt.length;

function funkcja() {
    if (variableHelper <= length) {
        spnText.textContent = "";
        indexTyping = setInterval(() => {
            spnText.textContent += txt[variableHelper - 1][writingHelper++];
            if (writingHelper == txt[variableHelper - 1].length) {
                clearInterval(indexTyping);
                variableHelper++;
                writingHelper = 0;
                addLetter();
            }
        }, 90);
    }
}

// Implementacja
const addLetter = () => {
    setTimeout(funkcja, 1000);
}
addLetter(); //pierwsze wywołanie

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);