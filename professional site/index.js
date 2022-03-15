if (document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded', ready());
}

else{
  ready()
}


function ready(){



  var addPortfolio = document.getElementsByClassName('btn-portfolio')[0];

  addPortfolio.addEventListener('click', addPort)


  var addResume = document.getElementsByClassName('btn-resume')[0];

  addResume.addEventListener('click', addRes)
movement()
}

function addPort(){
 var portScreen = document.getElementsByClassName('portfolio')[0];
 portScreen.setAttribute('style','display:grid')
 removeDisplay()

}

function addRes(){
 var portScreen = document.getElementsByClassName('resume')[0];
 portScreen.setAttribute('style','display:grid')

 removeDisplay()
movement()
}


function removeDisplay() {
  var removeDisplayButton= document.getElementsByClassName('btn-close');
 for (let i = 0; i < removeDisplayButton.length; i++) {
  var button = removeDisplayButton[i];
  button.addEventListener('click' ,function(event) {
   var buttonClicked = event.target;
   buttonClicked.parentElement.setAttribute('style','flex')


  })

 }




}


function movement(){
  var door= document.getElementsByClassName('portfolio')
for (let i = 0; i < door.length; i++) {
    door[i].classList.add('movement2')
}

}
