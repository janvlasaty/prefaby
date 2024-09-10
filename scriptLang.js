
let language = "en";

function displaySelectedLanguage(language) {
  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.style.display = 'none';
  })
  document.querySelectorAll(`[data-lang=${language}]`).forEach((el) => {
    el.style.display = 'block';
  })
}
displaySelectedLanguage(language);

function switchLanguage() {
  language = language === "en" ? "cs" : "en";
  displaySelectedLanguage(language);
}