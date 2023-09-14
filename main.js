import './style.css'

const fieldElement = document.querySelectorAll('.field');
const restartButton = document.getElementById('restart')

let t = new Array(9);

const player1 = 'X';
const player2 = 'O';
let value = player1;

let updateArray = () => {
  for(let i =0 ; i < fieldElement.length; i++){
    t[i] = fieldElement[i].textContent;
    }
    console.log(t);
  }

fieldElement.forEach(field=>field.addEventListener('click',()=>{
      if(!field.innerText){
        field.innerText= value;
        updateArray();
        winningCondition()
        changeValue();
} } ) )

function changeValue(){
  if(value === player1){
    return value = player2;
  }else if(value === player2){
    return value = player1;
  }
}

restartButton.addEventListener("click",()=>{
  fieldElement.forEach(field=>{field.innerText= "";
  })
  t.splice(0,t.length);
  console.log(t);
  value = 'X';
})

function winningCondition(){
  if(t[0] === value && t[1] === value && t[2] === value){
    console.log(`${value} won 1`);
  }else if(t[3] === value && t[4] === value && t[5] === value){
    console.log(`${value} won 2`);
  }else if(t[6] === value && t[7] === value && t[8] === value){
    console.log(`${value} won 3`);
  }else if(t[0] === value && t[3] === value && t[6] === value ){
    console.log(`${value} won 4`);
  }else if(t[1] === value && t[4] === value && t[7] === value ){
    console.log(`${value} won 5`);
  }else if(t[2] === value && t[5] === value && t[8] === value ){
    console.log(`${value} won 6`);
  }else if(t[0] === value && t[4] === value & t[8] === value ){
    console.log(`${value} won 7`);
  }else if(t[2] === value && t[4] === value && t[6] === value ){
    console.log(`${value} won 8`);
  }
}