let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turnO=true;   //playeer x ,player y;
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

const winPatterns = [
    
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
  console.log("clicked");
  if(turnO){
    box.innerText="0";
    turnO=false;
  }
  else{
    box.innerText="X";
    turnO=true;


  }
  box.disabled =true;
  checkWinner();
    });

});

const resetGame =() => {
  turnO=true;
enableBoxes();
msgContainer.classList.add("hide");

}




const disabledBoxes =()=>{
for(let box of boxes){
  box.disabled= true;

}
};

const enableBoxes =()=>{
  for(let box of boxes){
    box.disabled= false;
  box.innerText="";
  }
  };

const showWinner =(Winner) =>{
  msg.innerText =`congratulations, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
}



const checkWinner = () => {
  for(let pattern of winPatterns){
 let pos1= boxes[pattern[0]].innerText;
 let pos2= boxes[pattern[1]].innerText;
 let pos3= boxes[pattern[2]].innerText;

 if(pos1 != "" && pos2 != "" && pos3 !=""){
  if(pos1 == pos2  && pos2 == pos3){
    console.log("Winner", pos1);

    showWinner(pos1);
    disabledBoxes();
  }
 }
  }
};


newgamebtn.addEventListener("click", resetGame);

resetbtn.addEventListener("click",resetGame);