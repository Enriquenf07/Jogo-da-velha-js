const btn = document.querySelectorAll('.quadrado');
const divWin = document.querySelector('.win-div');
const winText = document.querySelector('.titulo-win');


const btn1 = btn[0];
const btn2 = btn[1];
const btn3 = btn[2];
const btn4 = btn[3];
const btn5 = btn[4];
const btn6 = btn[5];
const btn7 = btn[6];
const btn8 = btn[7];
const btn9 = btn[8];


let turn = "X"
let cont = 0
let listaprompt = [10, 11, 12, 13, 14, 15, 16, 17, 18]
let vencedor = 'O'
let track = 0

function winContent() {
    divWin.style.display = 'flex';
    winText.innerText = "Vencedor: " + turn
}

function drawContent() {
    divWin.style.display = 'flex';
    winText.innerText = "Empate"
}

function windisplay(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    winContent()
    
}

function drawdisplay(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    drawContent()
    
}

function wincondition(){
    track = 0
    for(let i = 0; i < 9; i++){
        if (listaprompt[i] == 1 || listaprompt[i] == 2){
            track++;
        }
    }
    if (listaprompt[0] == listaprompt[1] && listaprompt[2] == listaprompt[0]){
        windisplay()              
    }
    if (listaprompt[3] == listaprompt[4] && listaprompt[5] == listaprompt[3]){
        windisplay()
    }
    if (listaprompt[6] == listaprompt[7] && listaprompt[8] == listaprompt[6]){
        windisplay()
    }
    if (listaprompt[0] == listaprompt[3] && listaprompt[6] == listaprompt[0]){
        windisplay()
    }
    if (listaprompt[1] == listaprompt[4] && listaprompt[7] == listaprompt[1]){
        windisplay()
    }
    if (listaprompt[2] == listaprompt[5] && listaprompt[8] == listaprompt[2]){
        windisplay()
    }
    if (listaprompt[0] == listaprompt[4] && listaprompt[8] == listaprompt[0]){
        windisplay()
    }
    if (listaprompt[2] == listaprompt[4] && listaprompt[6] == listaprompt[2]){
        windisplay()
    }
    if (track == 9){
        drawdisplay()
    }
}

function playbtn1(){
    cont++;
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[0] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[0] = 2
        color = "white"
    }
    btn1.innerText = turn;
    btn1.disabled = true;
    btn1.style.color = color
    wincondition()

}

function playbtn2(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[1] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[1] = 2
        color = "white"
    }
    btn2.innerText = turn
    btn2.disabled = true;
    btn2.style.color = color
    wincondition()
}

function playbtn3(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[2] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[2] = 2
        color = "white"
    }
    btn3.innerText = turn
    btn3.disabled = true;
    btn3.style.color = color
    wincondition()
}

function playbtn4(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[3] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[3] = 2
        color = "white"
    }
    btn4.innerText = turn
    btn4.disabled = true;
    btn4.style.color = color
    wincondition()
}

function playbtn5(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[4] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[4] = 2
        color = "white"
    }
    btn5.innerText = turn
    btn5.disabled = true;
    btn5.style.color = color
    wincondition()

}

function playbtn6(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[5] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[5] = 2
        color = "white"
    }
    btn6.innerText = turn
    btn6.disabled = true;
    btn6.style.color = color
    wincondition()
}

function playbtn7(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[6] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[6] = 2
        color = "white"
    }
    btn7.innerText = turn
    btn7.disabled = true;
    btn7.style.color = color
    wincondition()
}
    
function playbtn8(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[7] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[7] = 2
        color = "white"
    }
    btn8.innerText = turn
    btn8.disabled = true;
    btn8.style.color = color
    wincondition()
}

function playbtn9(){
    cont++
    if (cont % 2 == 0){
        turn = "X"
        listaprompt[8] = 1
        color = "black"
    }
    else{
        turn = "O"
        listaprompt[8] = 2
        color = "white"
    }
    btn9.innerText = turn
    btn9.disabled = true;
    btn9.style.color = color
    wincondition()
}

btn1.addEventListener("click", playbtn1)
btn2.addEventListener("click", playbtn2)
btn3.addEventListener("click", playbtn3)
btn4.addEventListener("click", playbtn4)
btn5.addEventListener("click", playbtn5)
btn6.addEventListener("click", playbtn6)
btn7.addEventListener("click", playbtn7)
btn8.addEventListener("click", playbtn8)
btn9.addEventListener("click", playbtn9)

if (cont % 2 == 0){
    turn = "O";
}
else{
    turn = "X";
}



