var display = document.getElementById("value");
var button= Array.from(document.getElementsByClassName("btn"));
var arrow=document.getElementById("arrow").innerHTML;
button.map((btn) =>{
    btn.addEventListener("click",(e)=>{
        
        switch (e.target.innerText) {
            case "AC":
                display.innerText="";

                break;
            case "←":
                if(display.innerText){
                    display.innerText.slice(0,-1);
                }
                break
            case "=":
                try{display.innerText = eval(display.innerText);
                }catch{
                    display.innerText="Error!.."
                }
                break;
            default:
                
                display.innerText +=e.target.innerText;
                break;
        } 
    })
});

for(let i=0;i<20;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",(btn)=>{
            console.log(btn);
    })
}
    


