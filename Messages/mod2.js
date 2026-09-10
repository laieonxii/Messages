function $(tag) {
  return document.querySelector(tag);
}

const [btn, page] = [$("#btn"), $("#proceed")];

const currPage = localStorage.getItem("page");

if (currPage === "bdayMsg.html") {
  window.location.replace(currPage);
};

const start = () => {
  btn.style.padding = `${5 * 0.5}% ${15 * 0.5}%`;
};

const end = () => {
  btn.style.padding = "5% 15%";
  let number = 10;
  const id = "number";
  const count = setInterval(() => {
    if (number >= 0) {
      page.innerHTML = `<h1 id=${id}>${number}</h1>`;
      number--;
    } else {
      page.innerHTML = "<h1>Proceeding...</h1>";
      clearInterval(count);
      setTimeout(() => {
        window.location.replace("bdayMsg.html");
      }, 3000)
    }
  }, 1000)
  localStorage.setItem("page", "bdayMsg.html");
}

export { btn, start, end };