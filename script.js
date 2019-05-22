
//Side Navigation
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

//Carousel
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -((cardCount / 2) * carouselWidth +
               (cardMarginRight * (cardCount / 2)) -
               carouselWidth - cardMarginRight);

leftButton.addEventListener("click", function() {
 if (offset !== 0) {
   offset += carouselWidth + cardMarginRight;
   carousel.style.transform = `translateX(${offset}px)`;
   }
});
rightButton.addEventListener("click", function() {
 if (offset !== maxX) {
   offset -= carouselWidth + cardMarginRight;
   carousel.style.transform = `translateX(${offset}px)`;
 }
});
