//image changer
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sulli-1.jpg') {
      myImage.setAttribute ('src','images/sulli-2.jpg');
    } else {
      myImage.setAttribute ('src','images/sulli-1.jpg');
    }
}
//welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() 
{
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) 
  {
    setUserName();
  } 
  else 
  {
    localStorage.setItem('name', myName); 
    myHeading.innerHTML = 'Thanks for stopping by, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Thanks for stopping by, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}