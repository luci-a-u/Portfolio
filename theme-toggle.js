document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-theme");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDarkScheme)) {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

