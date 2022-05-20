let button = document.querySelector(".main__button");
let mainText = document.querySelector(".main__text");
let mainTextNext = document.querySelector(".main__text_next");
let mainTextHide = document.querySelector(".main__text_hide");
let number = 1;

function toggleText () {
    mainText.classList.toggle("main__text")
    mainText.classList.toggle("main__text_revive")
    
    if (number === 1) {
        mainTextNext.style.display = 'none';
        mainTextHide.style.display = 'block';
        number = 0
        return number;
    } 
    if (number === 0) {
        mainTextNext.style.display = 'block';
        mainTextHide.style.display = 'none';
        number = 1;
        return number;
    }
}

button.addEventListener("click", toggleText);


// Мороженое. Возвращение

// var goods = document.querySelector(".goods");

// var makeElement = function(tagName, className, text) {
//   var element = document.createElement(tagName);
//   element.classList.add(className);
//   if(text){
//     element.textContent = text;
//   }
// }

// var createCard = function(array){
//   var items = [];
//   var h2 = makeElement("h2", "good__description", array.text);
//   var img = makeElement("img");
//   img.src = array.imgUrl;
//   img.alt = array.text;
//   var p = makeElement("p", "good__price");
//   p.textContent = array.price + '₽/кг';
//   items.push(h2);
//   items.push(img);
//   items.push(p);
//   return items;
// }

// var renderCards = function(array){
//   for (let index = 0; index < array.length; index++) {
//     var makeLi = makeElement("li", "good");
//     if(array[index].isHit){
//       makeLi.classList.add("good--hit")
//     }
//     if(array[index].inStock){
//       makeLi.classList.add("good--available")
//     } else {
//       makeLi.classList.add("good--unavailable")
//     }
//     if(array[index].isHit){
//       makeLi.classList.add("good--hit")
//     }
//     if(array[index].specialOffer){
//       var specialP = createCard(array).push(makeElement("p", "good__special-offer", array.specialOffer))
//       goods[index].appendChild(specialP);
//     }
//   }
//   goods[index].appendChild(createCard(array))
// }

// renderCards(cardsData);