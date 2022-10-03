const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b")
const refresh_btn = document.querySelector(".refresh-word");
const check_btn = document.querySelector(".check-word");
const inputField = document.querySelector("input");
let correctWord ,timer;


const initTimer = e=>{
    clearInterval(timer);
    timer =setInterval(()=>{
        if(e>0){
            e--;
return timeText.innerText = e;

        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`)
         initGame();
    },1000);

}

const initGame = ()=>{
    initTimer(31);
    let randomObj = words[Math.floor(Math.random()*words.length)];
    let wordArray=randomObj.word.split("");
    for(let i = wordArray.length - 1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];

    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength",correctWord.length);
    // console.log(wordArray,randomObj.word)
}
initGame();

const checkWord = ()=>{
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert("Please enter a word");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    else return alert(`congrats ! ${userWord.toUpperCase()} is correct Word`)
    initGame();
}

refresh_btn.addEventListener("click",initGame);
check_btn.addEventListener("click",checkWord);