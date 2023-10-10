function clickBtn() {
  const spoiler = document.querySelector("#spoiler");
  spoiler.classList.toggle("closed");
}

function pressEsc(e) {
  if (e.code == "Escape") {
    const spoiler = document.querySelector("#spoiler");
    const closed = spoiler.classList.contains("closed");
    if (closed) return;
    spoiler.classList.add("closed");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#myBtn");
  btn.addEventListener("click", clickBtn);
});

document.addEventListener("keydown", pressEsc);
