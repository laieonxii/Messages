function $(tag) {
  return document.querySelector(tag);
};

const [msgBox, mainBox, frontBlur, ribbon, paperContainer] = [$("#messageBox"), $(".box"), $("#notRevealMsg"), $("#ribbon"), $("#msgPaper")];

class Contents {
  constructor(content, name="Name", punc=".") {
    this.content = content;
    this.name = name;
    this.punc = punc;
  };
}

class Element {
  constructor(e, i) {
    this.element = e;
    this.index = i;
  };
};

class Tag extends Element {
  getTag(content="Content", name="Name", punc=".") {
    const tag = this.element.children[this.index]
    tag.innerText = content + " " + name + punc;
    //return content + name + punc;
  };
};

const dName = "Charlnick";
const bdMsg = [
  `Hi, ${dName},`, "Happy 18th Birthday, Charlnick! 🎂🎉. Finally, you're stepping onto adulthood. But first, I want to tell you that you already have the maturity but sometimes you're taking it too much to the point that it steals your inner peace and bond with everyone, hangga't kayang maging bata, experience it, feel it, and enjoy it.",
  "Because, being into this stage of life is painful at sometimes. We all wished to become adults when we were a kid and now that we're adults hinihiling natin na sana bumalik tayo sa pagkabata, no stresses, no problems, no deadlines to chase, we just had the freedom we always wanted. But, I'm not also saying that being an adult is already a nightmare nor has always been. Being an adult is also such a privilege. It feels like you're stepping onto the next level to keep discovering more about yourself.",
  "FEEL every moment, FEEL every hour, minute, second, or milisecond of our life, because even in a short moment of time we just had a meaningful and senseful life.",
  "Never stop learning and growing, never be afraid to commit mistakes because it's what keeps us improving everytime.",
  "If there's something that keeps pulling you down, find a reason to keep climbing, like if gravity pulls you, the fruits from the tree is your reason why you're climbing it and take those fruits which symbolize your dreams. Again, Happy Birthday!",
  "images/debutant.jpg"];

const styles = ["font-weight:900", "text-align:justify"];

const bdMsgMod = bdMsg.map((e) => {
  if (e.includes("images/")) {
    return `<img src=${e}>`;
  } else {
    return `<span style=${styles.join(";")}>${e}</span>`
  };
});

// touchstart
const start = (e) => {
  e?.preventDefault();
  msgBox.style.height = "170px";
  msgBox.style.width = "120px";
};

const stepsFunc = {
  zoom() {
    return new Promise((resolve) => {
      start();
      msgBox.addEventListener("touchend", () => {
        msgBox.style.height = "300px";
        msgBox.style.width = "250px";
        document.documentElement.style.setProperty("--radius", "10px");
        frontBlur.children[0].style.fontSize = "2em";
        frontBlur.children[2].style.fontSize = "2em";
        frontBlur.children[2].innerHTML = `(Click again)<br>Untie the ribbon.`;
        //-------
        resolve();
      }, { once: true });
    });
  },
  untie() {
    return new Promise((resolve) => {
      ribbon.style.top = "1000%";
      frontBlur.children[2].innerText = "Loading...";
      setTimeout(() => {
        frontBlur.removeChild(frontBlur.children[2]);
        frontBlur.style.justifyContent = "center";
      }, 3000);
      let msgIndex = 0;
      const msgNext = ["Hi!", "Are you ready to read the message?", "Loading...", "Firstly, Thank you for having a time to read this!", "I hope you appreciate it."];
      const msgCurrent = [];
      const showMsg = setInterval(() => {
        if (msgIndex < msgNext.length - 3) {
          msgCurrent.push(msgNext[msgIndex]);
          frontBlur.children[0].innerHTML = msgCurrent.join(" ");
          msgIndex++;
        } else if (msgIndex > 1 && msgIndex < msgNext.length) {
          frontBlur.children[0].innerHTML = msgNext[msgIndex];
          msgIndex++;
        } else {
          clearInterval(showMsg);
          frontBlur.children[0].innerHTML = "Tap to read.";
          resolve();
        }
      }, 3000);
    })
  },
  reveal() {
    return new Promise((resolve) => {
      paperContainer.children[0].innerHTML= "Tap to reveal the message.";
      setTimeout(() => {
        frontBlur.style.bottom = "500%";
        resolve();
      }, 500);
    })
  },
  zoomPaper() {
    return new Promise((resolve) => {
      paperContainer.style.width = "100vw";
      paperContainer.style.height = "100vh";
      paperContainer.children[0].style.fontSize = "5vw";
      setTimeout(() => {
        paperContainer.style.backdropFilter = "blur(10px)";
        paperContainer.children[0].style.opacity = "0";
        paperContainer.children[0].style.fontWeight = "900";
        setTimeout(() => {
          paperContainer.children[0].style.opacity = "1";
          paperContainer.children[0].innerHTML = `Hi, ${dName}!`;
          setTimeout(() => {
            paperContainer.children[0].style.height = "30%";
            paperContainer.children[0].style.textAlign = "start";
            paperContainer.children[0].style.padding = "15px 0";
            window.alert("Hi! The message has multiple paragraphs, just scroll down through the paper to read all of them.")
            setTimeout(() => {
              paperContainer.children[0].style.overflow = "auto";
              paperContainer.children[0].style.opacity = "0";
              setTimeout(() => {
                paperContainer.children[0].style.opacity = '1';
                paperContainer.children[0].innerHTML = bdMsgMod.join("<br>");
                resolve();
              }, 1000)
            }, 1000)
          }, 1500)
        }, 1500)
      }, 1000)
    })
  }
}

export {$, Contents, Tag, msgBox, mainBox, frontBlur, ribbon, paperContainer, stepsFunc, start};