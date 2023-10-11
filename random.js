

  function setRandomColor() {

let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  cards[i].style.backgroundColor = randomColor;
}


  }

 





  