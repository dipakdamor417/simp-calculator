
let btn = document.querySelectorAll('span');
let value=document.getElementById('value');

for(let x=0;x < btn.length;x++){
    btn[x].addEventListener("click", function(){
        if(this.innerHTML == "="){
            value.innerHTML= eval(value.innerHTML);
        }
        else{
            if(this.innerHTML == "Clear"){
              value.innerHTML ="";
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}
