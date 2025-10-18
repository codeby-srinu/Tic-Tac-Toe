let buttons=document.querySelectorAll(".button");
let resetgame =document.querySelector("#reset");
let newbtn =document.querySelector("#new");
let win =document.querySelector(".win");
let msg =document.querySelector("#msg");

let turn0  =  true;

const winNum=[[0,1,2],
              [0,3,6],
              [0,4,8],
              [1,4,7],
              [2,1,0],
              [2,4,6],
              [2,5,8],
              [3,4,5],
              [6,7,8],
              [6,4,2], 
              [6,3,0],
              [7,4,1],
              [8,4,0],
              [8,5,2],
];
const reset =()=>{
    turn0="true";
    enablebuttons();
    win.classList.add("hide");

};


buttons.forEach((button) => {
    button.addEventListener("click" , ()=>{
        console.log("box clicked");
        if(turn0){
            button.innerText="O";
            turn0=false;
        }else{
            button.innerText="X";
            turn0=true;
        }
        button.disabled=true;
        checkwinner();
    });
});
const disabledbuttons=()=>{
    for(let button of buttons){
        button.disabled=true;
    }
};
const enablebuttons=()=>{
    for(let button of buttons){
        button.disabled=false;
        button.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=` Congratulations,winner is ${winner}`;
    win.classList.remove("hide");
    disabledbuttons();
};

const checkwinner= () => {
    for(let Num of winNum){
        let pos1=buttons[Num[0]].innerText;
        let pos2=buttons[Num[1]].innerText;
        let pos3=buttons[Num[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
           showWinner(pos1);
        }    
      }
    }
};
newbtn.addEventListener("click",reset);
resetgame.addEventListener("click",reset);
