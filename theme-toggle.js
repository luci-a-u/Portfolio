document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("toggle-theme");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  const isDark = savedTheme === "dark" || (!savedTheme && prefersDarkScheme);
  document.body.classList.toggle("dark-mode", isDark);
  toggleCheckbox.checked = isDark;

  toggleCheckbox.addEventListener("change", function () {
    const isChecked = toggleCheckbox.checked;
    document.body.classList.toggle("dark-mode", isChecked);
    localStorage.setItem("theme", isChecked ? "dark" : "light");
  });
});

