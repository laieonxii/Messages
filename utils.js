function i(tag) {
  return document.querySelector(tag);
};

function $(tag) {
  return document.querySelectorAll(tag);
};

const [cards, head, readerCon, readers, backdrop, logo, cardContainer2, flipName, flipImg, nextCardBtn, card, cardImg, label, katsMsg, transparent, cabinet, storedImage, storedName, storedMessage, loading] = [
  $(".cards"),
  i("#head"),
  i("#readersContainer"),
  $(".readers"),
  i("#backdrop"),
  i("#logo"),
  i(".cardContainer2"),
  $(".flipName"),
  $(".flipImg"),
  i("#nextCardBtn"),
  i(".card"),
  $(".cardImg"),
  $(".label"),
  i("#katsMsg"),
  i("#transparent"),
  i("#cabinet"),
  $(".storedImg"),
  $(".storedName"),
  $(".storedMsg"),
  i("#loading")
];

const load = () => {
  const hasLoaded = localStorage.getItem("Ready");
  
  if (hasLoaded === "True") {
    loading.style.display = "none";
    return;
  };
  
  setTimeout(() => {
    let seconds = 30;
    const countdown = setInterval(() => {
      if (seconds >= 0) {
        loading.innerHTML = `<h1 style="font-size:5em;">${seconds}</h1>`;
        seconds--;
      } else {
        clearInterval(countdown);
        loading.style.top = "-110%";
        setTimeout(() => {
          loading.style.display = "none";
          localStorage.setItem("Ready", "True");
        }, 2500);
      };
    }, 1000);
  }, 3000);
};

const logoCollections = ["katseye", "ts", "itzy"];
const transparentCollections = ["katseyeTransparent", "tsTransparent", "itzyTransparent"]

const {
  ez,
  jk,
  as
} = {
  ez: ["sophia", "megan", "dani", "manon", "yoonchae", "lara"],
  jk: ["ts1", "ts2", "ts3", "ts4", "ts5", "ts6"],
  as: ["ryu", "yej", "cha", "yun", "lia", "iz"]
};

const photos = [ez, jk, as];

const {
  mem1,
  mem2,
  mem3
} = {
  mem1: ["Sophia", "Megan", "Dani", "Manon", "Yoon Chae", "Lara"],
  mem2: ["TLOAS", "Fear Less", "Speak Now", "RED", "Ever More", "REP"],
  mem3: ["RYUJIN", "YEJI", "CHAER YOUNG", "YUNA", "LIA", "ITZY"]
};

const {
  mem4,
  mem5,
  mem6
} = {
  mem4: ["Sophia", "Megan", "Daniela", "Manon", "Yoonchae", "Lara"],
  mem5: ["TLOAS", "Fearless", "Speak Now", "RED", "Evermore", "REP"],
  mem6: ["RYUJIN", "YEJI", "CHAER YOUNG", "YUNA", "LIA", "ITZY"]
};

const members = [mem1, mem2, mem3];
const noBrMembers = [mem4, mem5, mem6];

const {
  msg1,
  msg2,
  msg3
} = {
  msg1(sender) {
    return [
      `Hi, it's ${sender}! George sent you a message. — "Hi, Ezekiel! I hope this message finds you well and in good spirits. I made this thing to make it a little more special for you. Belated and Advance Happy Birthday!🎈. I want to say sorry cuz I wasn't able to attend your mini birthday celebration at SM last time, I had so many reasons but one main thing was that it would actually be so awkward for me to keep myself fitting into a circle I'm not really used to being with."`,
    `Delivery, Delivery... 🚚! ${sender} sent a message to Ezekiel from George! — "But always remember that you're important to me. From time to time, I always notice how much you value everyone, especially your friends. You somehow always make an effort to spend quality time with us, and please keep in mind that it's always appreciated and noticed by us. I really hope that we can spend more time together in the future."`,
    `Hey, it's ${sender}! It's been bothering me that you have an unread message waiting in front of your door, and it's from George? Could you please read it right away? — "Now, let's move on from apologizing to thanking you. Thank you for being such a good friend and for always being kind to me. I thought I wouldn't have you in my life, and yet here you are, always by our side and supporting us every step of the way. And now, it's time to return that support to you."`,
    `Knock Knock! I'm ${sender}! I've been trying to call you lately, but it seems like you haven't been answering my calls. Anyways, let me read this message from George for you. — "I hope you're also happy to have us in your life, and in case you ever need help, we're always here to do our best to assist you no matter what, as long as we can. You are truly one of a kind, someone anyone would be lucky to have. It may sound a little common to say, but I genuinely believe it's true. 😉"`,
    `Bruhh, 4 down, 2 more to go. Read this and it'll become 5. By the way, I'm ${sender}! Your fifth sender of a message from George to you, Ezekiel. Anyways, here it is. — "Keep being the Ezekiel we all know—the one who's loving, caring, and thoughtful, and most especially, kind. You have so many good traits that we couldn't possibly count them all. That's just how good of a person you are. You may not have noticed it, but we are genuinely so proud of you, and we always will be. Always and always, and I truly mean always."`,
    `I love that you picked me as your last card. My name is ${sender}! Nice to meet you! By the way, here's the last part of George's message for you. — "Lastly, I look forward to seeing your journey and future. I wish you the best and hope you achieve your dreams. I know you'll go far, so just stay true to yourself and be happy. Keep pursuing the things you love and choose what you believe is best for you. Always keep bringing joy and a smile to your face, stay positive, and most importantly, stay kind."`
    ];
  },
  msg2(sender) {
    return [
      `Hi, Jake! You probably know who sent you this but I want to thank you first for dedicating your time to read this message. Firstly, thank you for considering me as your friend. Before, I thought that our mindset and beliefs wouldn't align because we're really different and I would've even imagine that we would never become friends but little did I know that you were actually an understanding person and sort of open to someone you trust.`,
      `Secondly, I hope we can build a stronger relationship through our frequent bonding. I hope you can always remember us and everything that we've been through as classmates and friends. No matter where life takes us, I hope the memories and friendship we shared will always remain meaningful to you. You can always be open to us whenever you have an issue or a problem. We will always be here to listen, support, and guide you as your friends.`,
      `Thirdly, I somehow understand your situation and why you're always quiet, and I hope you don't mind that. Some may find it difficult to get to know you because you tend to keep to yourself, but we want you to know that you can always trust us. We won't force you to open up, and we respect your choices. You can always be yourself, and whenever you need someone to lean on, we'll be here for you and support you in whatever you may face.`,
      `Fourthly, we will always support you in pursuing your dreams. I'm really sure that everyone who has you in their life is lucky to know you, and they will never find anyone quite like you because you have such a unique and wonderful personality. We hope you continue to believe in yourself, stay true to who you are, and keep working toward the things you dream of. No matter where life takes you, always remember that we will be here to support and cheer you on.`,
      `Fifthly, stay funny, humorous, and always continue spreading positivity and laughter to everyone around you. Keep being the person who can brighten someone’s day with your presence and sense of humor. Let’s also continue to bond and spend more time together with your loved ones and friends, creating more happy memories that we can cherish in the future. I hope we can make more unforgettable moments together and enjoy each other’s company even more.`,
      `Lastly, you have made a huge impact on our memories, making you someone who can never be easily forgotten. From being someone who was once quiet, you have become someone with many things to share with the world and prove who you truly are. Never think that you are unworthy, because you are a great example for young people to look up to. You are intelligent, creative, and always willing to think outside the box. Stay curious and never stop seeking answers.`
    ];
  },
  msg3(sender) {
    return [
      `Hi, Asia! From the first time we became classmates, I thought we would always just be classmates until we eventually became friends and built memories together, especially during our 12th grade. From being an introvert to being more extroverted when you're with your friends, I can now feel that you're more comfortable with us and understand our personalities, including our sense of humor. I'm really glad we got to know each other better and became closer along the way.`,
      `I want to thank you for being the light of the group and for always keeping it alive. You are one of the most active and talkative people in our chats, especially in group conversations. You’re almost always willing to share things with us and are always down to hang out with your friends and with us. Your presence really makes our group more fun and lively, and we’re grateful for all the moments, happiness and enjoyment you bring whenever we’re together.`,
      `If we're going to be specific about the memories we're talking about, aside from hanging out physically and personally, one of my favorites is our hang-outs in the online world. From MLBB to WePlay to Roblox, etc., we also created memories as playmates. These became one of our ways to bond and have fun together whenever we couldn't see each other personally. Even though we were only playing online, those moments still became meaningful memories that I’ll always remember.`,
      `Just so you know, you are my closest female friend ever in my life. Although I’ve also become friends and grown closer to other girls, you are still at the top because you never became afraid to show us who you really are. You’ve always been comfortable being yourself around us, and I really appreciate how genuine and open you are. That’s one of the reasons why our friendship became so special to me, and I’m really grateful that I got the chance to know you better.`,
      `I appreciate the way you give us your trust and believe in us. You always cheer us on and lift us back up whenever we're feeling down. Your support means so much to us, and it gives us hope knowing that someone still believes in us, especially when we start doubting ourselves. Your encouragement reminds us to keep going and believe in ourselves again. We hope you know that you can always count on us too, whenever you need someone by your side.`,
      `Again, thank you for everything! You've contributed so much to our group, and you're truly one of the people who brings life and energy to it. Your presence is something that everyone appreciates, and the memories we've made with you are remarkable, memorable, and unforgettable. I don't want to get too dramatic, but thank you for coming into our lives and becoming such an important part of our journey together. I hope we reach our dreams together in the future.`
    ];
  }
};

const theMsgs = [msg1, msg2, msg3];

let oneTime = 1;

const doneCheck = () => {
  const userID = Number(localStorage.getItem("ID"));
  
  for (let i = 0; i <= 5; i++) {
    if (localStorage.getItem(`card${i}`) !== "0") {
      return;
    };
  };
  
  head.children[1].innerText = `All messages are saved in the "${logoCollections[userID]}" logo. Click to view`;
  console.log("Done.");
};

const setupCards = () => {
  const userID = Number(localStorage.getItem("ID"));
  cards.forEach((el, ind) => {
    const key = `card${ind}`;
    //    
    el.addEventListener("click", () => {
      cardContainer2.style.display = "flex";
      setTimeout(() => {
        cardContainer2.style.opacity = "1";
        if (oneTime === 1) {
          setTimeout(() => {
            alert(`Click on the photocard of ${noBrMembers[userID][ind]} to see the message and once you're done reading click the "Next Card" button to open a next card.`);
            oneTime--;
          }, 500);
        };
      }, 100);
      
      for (let x = 0; x <= 1; x++) {
        flipName[x].innerHTML = noBrMembers[userID][ind];
        flipImg[x].src = `images/${photos[userID][ind]}.jpg`;
      };
      
      let currMsg = Number(localStorage.getItem("MsgNo"));
      console.log(currMsg);
      katsMsg.innerText = theMsgs[userID](noBrMembers[userID][ind])[currMsg];
      //---
      const storedCard = {
        img: `images/${photos[userID][ind]}.jpg`,
        name: noBrMembers[userID][ind],
        msg: theMsgs[userID](noBrMembers[userID][ind])[currMsg]
      };
      //-------
      localStorage.setItem(`storedCard${currMsg}`, JSON.stringify(storedCard));
      
      const saved = localStorage.getItem(`storedCard${currMsg}`);
      
      const cardData = JSON.parse(saved);

      storedImage[currMsg].src = cardData.img;
      storedName[currMsg].innerText = cardData.name;
      storedMessage[currMsg].innerText = cardData.msg;
    
      storedName[currMsg].classList.remove("skeleton");
      storedMessage[currMsg].classList.remove("skeleton");
      
      currMsg++;
      
      localStorage.setItem("MsgNo", currMsg);
      
      //-----
      el.style.opacity = "0.4";
      //-----
      localStorage.setItem(key, "0");
      //-----
      doneCheck();
    }, { once: true });
  });
};

const clear = () => {
  logo.addEventListener("dblclick", () => {
    localStorage.clear();
    window.location.reload();
  });
};

function showCard() {
  const userID = Number(localStorage.getItem("ID"));
  let i = 0;
  
  for (let i = 0; i <= 5; i++) {
    const key = `card${i}`;
    if (localStorage.getItem(key) === "0") {
      setTimeout(() => {
        cards[i].style.opacity = "0";
        setTimeout(() => {
          cards[i].style.display = "none";
        }, 1500)
      }, 5000);
    };
    //-----
  };
  
  const listing = setInterval(() => {
    if (i <= 5) {
      const key = `card${i}`;
      //-----
      if (localStorage.getItem(key) === "0") {
        cards[i].style.opacity = "0.4";
      } else {
        cards[i].style.opacity = "1";
      };
      cardImg[i].alt = noBrMembers[userID][i];
      cardImg[i].src = `images/${photos[userID][i]}.jpg`;
      label[i].innerHTML = members[userID][i];
      console.log(i);
      i++;
    } else {
      clearInterval(listing);
      setupCards();
      clear();
    };
  }, 500);
};

let isNextCard = false;

const unshowFlipCard = () => {
  if (isNextCard) {
    cardContainer2.style.opacity = "0";
    setTimeout(() => {
      cardContainer2.style.display = "none";
    }, 500);
    isNextCard = false;
    console.log(isNextCard);
  };
};

const toNextCard = () => {
  if (!isNextCard) {
    isNextCard = true;
  };
  
  console.log(isNextCard);
};

const changeImg = () => {
  cardImg.forEach((el, ind) => {
    const picNum = localStorage.getItem(`pic${ind}`);
    
    el.src = `images/${picNum}.jpg`;
  })
};

const showCabinet = () => {
  cabinet.style.bottom = "0";
};

export { logo, logoCollections, backdrop, transparent, transparentCollections, readerCon, readers, head, showCard, setupCards, cards, nextCardBtn, card, toNextCard, unshowFlipCard, cardImg, photos, changeImg, label, members, noBrMembers, cabinet, showCabinet, storedImage, storedName, storedMessage, doneCheck, load};