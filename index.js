

const input = document.getElementById('numberOfWords');
const container = document.querySelector(".container");


const generateWord = (n) =>{
    let text = "";

    const letters = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i<n; i++){
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }


    return text;
}



 
let numOfword;

const data  = () =>{
  numOfword =  Number(input.value);
  console.log(numOfword);
  
  let newPara = "";
  const para = document.createElement("p");
  
 for(let i = 0; i<numOfword; i++){
   newPara += generateWord((Math.random()*12).toFixed(0));
    newPara += " ";
 }

  para.innerText = newPara;
  para.setAttribute("class" , "paras");
  container.append(para);
};