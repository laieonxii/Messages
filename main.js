import { logo, logoCollections, transparent, transparentCollections, backdrop, readerCon, readers, head, showCard, setupCards, cards, nextCardBtn, card, toNextCard, unshowFlipCard, cardImg, photos, changeImg, label, members, noBrMembers, cabinet, showCabinet, storedImage, storedName, storedMessage, doneCheck, load} from './utils.js';

load();

const userID = Number(localStorage.getItem("ID"));
const users = localStorage.getItem("User");
const participants = [
  "Ezekiel",
  "Jake",
  "Asia"
];
const favicon = [
  "ezekielIcon",
  "jakeIcon",
  "asiaIcon"
];

if (users) {
  readerCon.style.display = "none";
  head.firstElementChild.innerHTML = `Hi, ${users}!`;
  document.head.children[4].href = `images/${favicon[userID]}.jpg`;
  document.title = users;
  logo.src = `images/${logoCollections[userID]}Logo.jpg`;
  transparent.src = `images/${transparentCollections[userID]}.jpg`;
  //-----
  showCard();
  changeImg();
  doneCheck();
  
  logo.addEventListener("click", showCabinet);
}

for (let i = 0; i <= 5; i++) {
  const saved = localStorage.getItem(`storedCard${i}`);
   
  if (saved) {
    const cardData = JSON.parse(saved);
    
    storedImage[i].src = cardData.img;
    storedName[i].innerText = cardData.name;
    storedMessage[i].innerText = cardData.msg;
    
    storedName[i].classList.remove("skeleton");
    storedMessage[i].classList.remove("skeleton");
  };
 };

readers.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let x = 0; x <= 5; x++) {
      const picNum = `pic${x}`;
      const nameNum = `name${x}`;
      
      cardImg[x].src = `images/${photos[i][x]}.jpg`;
      cardImg[x].alt = noBrMembers[i][x];
      label[x].innerHTML = members[i][x];
      
      localStorage.setItem(nameNum, members[i][x]);
      localStorage.setItem(picNum, photos[i][x]);
    };
    
    // favicon
    document.head.children[4].href = `/images/${favicon[i]}.jpg`;
    //-----
    
    head.firstElementChild.innerText = `Hi, ${e.innerText}!`;
    document.title = participants[i];
    readerCon.children[0].innerText = `Welcome, ${e.innerText}!`;
    readerCon.children[1].style.display = "none";
    readerCon.style.opacity = "0";
    //--------
    backdrop.style.display = "block";
    logo.src = `images/${logoCollections[i]}Logo.jpg`;
    transparent.src = `images/${transparentCollections[i]}.jpg`;
    
    setTimeout(() => {
      readerCon.style.display = "none";
      logo.style.bottom = "50%";
      logo.style.transform = "translate(0,50%)";
      logo.style.width = "100%";
      setTimeout(() => {
        backdrop.style.opacity = "0";
        logo.style.bottom = "0";
        logo.style.transform = "translate(0,0)";
        logo.style.width = "50%";
        
        logo.addEventListener("click", showCabinet);
        setTimeout(() => {
          backdrop.style.display = "none";
          showCard();
        }, 1000);
      }, 2000);
    }, 2000);
    //------
    localStorage.setItem("ID", i)
    localStorage.setItem("User", participants[i]);
    console.log(i);
  });
});

card.addEventListener("click", toNextCard);

nextCardBtn.addEventListener("click", unshowFlipCard);

document.getElementById("closeCabinet").addEventListener("click", () => {
  cabinet.style.bottom = "-100%";
});

storedMessage.forEach(e => {
  e.addEventListener("touchstart", () => {
    if (!e.classList.contains("skeleton")) {
      e.style.maskImage = "linear-gradient(rgba(0,0,0,1) 0%)";
      e.style.webkitMaskImage = "linear-gradient(rgba(0,0,0,1) 0%)";
    };
  });
  
  e.addEventListener("touchend", () => {
    if (!e.classList.contains("skeleton")) {
      e.style.maskImage = "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,.5) 90%, rgba(0,0,0,0) 100%)";
      e.style.webkitMaskImage = "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,.5) 90%, rgba(0,0,0,0) 100%)";
    };
  });
});

/*document.getElementById("storageOverflow").addEventListener("touchmove", () => {
  document.getElementById("storageOverflow").style.overflow = "auto";
});

document.getElementById("storageOverflow").addEventListener("touchend", () => {
  document.getElementById("storageOverflow").style.overflow = "visible";
})*/

//localStorage.clear();