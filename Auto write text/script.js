const text = "helllo how are youy ?/ 🐱‍🏍";

let index = 0 , flag= false;

function writeText(){
    document.body.innerText= text.slice(0 , index);
    
    index++;
    if(index> text.length - 1){
        index= 0;
    }
}

setInterval(writeText , 200);