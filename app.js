const buttons=document.querySelectorAll('button');
const screenDispaly=document.querySelector('.screen');

let result=[];
let accumulativeCalculation
function calculate(button){
   try{
    if(button == 'CLEAR'){
        result=[];
        screenDispaly.textContent = 0;
    } else if(button === '='){
        screenDispaly.textContent=eval(accumulativeCalculation);
        result=[eval(accumulativeCalculation)]
    } else {
        result.push(button)
    accumulativeCalculation = result.join('');
    screenDispaly.textContent=accumulativeCalculation;
    console.log(result);
    }
   } catch(error){
    // screenDispaly.innerHTML = "Andha hai Kya!! \n Yedde";
    // document.getElementById('image').style.display='block';
    // <img id="image" src="error.png" style="display:none;"/>
    screenDispaly.textContent = '';
    var img = document.createElement("img");
    img.setAttribute('id','image')
    img.setAttribute('src', 'error.webp');
    screenDispaly.appendChild(img);
   }
}

buttons.forEach(button => button.addEventListener('click',() => calculate(button.textContent)))