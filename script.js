let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "styles/default.css";
  }

  if (mode == "black") {
    document.getElementById("theme-style").href = "styles/black.css";
  }

  if (mode == "orange") {
    document.getElementById("theme-style").href = "styles/orange.css";
  }

  if (mode == "mint") {
    document.getElementById("theme-style").href = "styles/mint.css";
  }

  localStorage.setItem("theme", mode);
}
