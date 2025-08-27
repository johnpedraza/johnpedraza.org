const items = document.querySelectorAll("p");

function toggleBig(e) {
  if (!e.target.className) {
    e.target.className = "big";
  } else {
    e.target.className = "";
  }
}

items.forEach((item) => {
  item.addEventListener("click", toggleBig);
});

