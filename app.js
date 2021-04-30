const text = document.getElementById('textarea');
const char = document.getElementById('char-count');
const word = document.getElementById('word-count');

text.addEventListener('keyup', () => {
    let charCnt = text.value.trim().length;
    let wordCnt = text.value.match(/\w+/g);
    char.innerText = charCnt;
    word.innerText = charCnt > 0 ? wordCnt.length : '0';
})