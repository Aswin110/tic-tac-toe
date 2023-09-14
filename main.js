import './style.css'

const fieldElement = document.querySelectorAll('.field');
const restartButton = document.getElementById('restart');
const message = document.getElementById('message');

let t = new Array(9);

const player1 = 'X';
const player2 = 'O';
let round = 0;
let value = player1;
let game = false;

let updateArray = () => {
  for(let i =0 ; i < fieldElement.length; i++){
    t[i] = fieldElement[i].textContent;
    }
  }

let changeValue = () => {
  if(value === player1){
    return value = player2;
  }else if(value === player2){
    return value = player1;
  }
}

let winningCondition = () => {
  if((t[0] === value && t[1] === value && t[2] === value)||
    (t[3] === value && t[4] === value && t[5] === value)||
    (t[6] === value && t[7] === value && t[8] === value)||
    (t[0] === value && t[3] === value && t[6] === value)||
    (t[1] === value && t[4] === value && t[7] === value)||
    (t[2] === value && t[5] === value && t[8] === value)||
    (t[0] === value && t[4] === value && t[8] === value)||
    (t[2] === value && t[4] === value && t[6] === value)){
    game = true;
    message.innerText = `Player '${value}' won the game!!!`
    return;

  }
  console.log(!winningCondition)
 }
 
 let drawGame = () => {
  if(round === 9)message.innerText = "Draw Game";
 }

fieldElement.forEach(field=>field.addEventListener('click',()=>{
  if((!field.innerText) && (!game)){
    field.innerText= value;
    updateArray();
    winningCondition()
    changeValue();
    round++;
    drawGame()
}}))

restartButton.addEventListener("click",()=>{
  fieldElement.forEach(field=>{field.innerText= "";
  })
  t.splice(0,t.length);
  value = 'X';
  round = 0;
  game = false;
  message.innerText = "X O X";
}) 