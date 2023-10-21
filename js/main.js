// var hoverItems = document.getElementsByClassName('hover-item');
var popCardsss = document.getElementsByClassName("pop-cardsss");
var cardItemp = document.getElementsByClassName("card-itemp");

for (var i = 0; i < popCardsss.length; i++) {
  popCardsss[i].addEventListener("mouseenter", showHiddenItem);
  popCardsss[i].addEventListener("mouseleave", hideHiddenItem);
}

function showHiddenItem() {
  var index = Array.from(popCardsss).indexOf(this);
  cardItemp[index].style.display = "block";
}

function hideHiddenItem() {
  var index = Array.from(popCardsss).indexOf(this);
  cardItemp[index].style.display = "none";
}
