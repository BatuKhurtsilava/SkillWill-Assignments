let colorButton;
let averageButton;

document.querySelector('.modal').addEventListener('click', function(){
const modalDiv =  document.createElement('div');
const colorInput = document.createElement('input');
const averageInput = document.createElement('input');
const modalOverlay = document.createElement('div');
colorButton = document.createElement('button');
averageButton = document.createElement('button');
colorButton.innerText = 'click';
averageButton.innerText = 'click';
colorInput.value = 'type the color :)'
averageInput.value = 'type digits - get average'
modalDiv.append(colorInput,colorButton,averageInput, averageButton);
document.body.append(modalDiv);
document.body.append(modalOverlay);
modalDiv.classList.add('modal-container');
modalOverlay.classList.add('modal-overlay');

colorInput.addEventListener('click', function() {
  colorInput.value = '';
})

averageInput.addEventListener('click', function() {
  averageInput.value = '';
})

colorButton.addEventListener('click', function() {
  if(colorInput.value === 'red') {
    modalOverlay.style.backgroundColor = 'red';
  }
 else if(colorInput.value === 'green') {
    modalOverlay.style.backgroundColor = 'green';
  }

 else if(colorInput.value === 'black') {
    modalOverlay.style.backgroundColor = 'black';
  }

 else if(colorInput.value === 'blue') {
    modalOverlay.style.backgroundColor = 'blue';
  }

 else if(colorInput.value === 'white') {
    modalOverlay.style.backgroundColor = 'white';
  }

  else {
    alert('valid colors are: green,red,black,blue or white');
  }
})


let validInput = true;
averageButton.addEventListener('click', function() {
 const numbersArr = averageInput.value.split(':');
 let sum = 0;
 for(num of numbersArr) {
  if(isNaN(num)) {
    alert('Enter numbers separated by ":"');
    validInput = false;
    break;
  } else{
  sum += Number(num);
  }
 }
 if(validInput){
 const avg = sum/numbersArr.length;
 alert(avg);
 }

})
})



