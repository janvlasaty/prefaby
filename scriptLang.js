
let language = "en";
let translations = null;

function displaySelectedLanguage(language) {
  const els = document.querySelectorAll('[data-translation]')
  els.forEach((el) => {
    const key = el.getAttribute('data-translation');
    const translation = getNotedTranslation(key);
    console.log(key, translation);
    if (!Array.isArray(translation)) {
      el.innerHTML = translation[language];
    } else {
      console.log("array", translation);
      // add same element to the end of parent node
      const parentNode = el.parentNode;
      translation.forEach((t, i) => {
        const clone = el.cloneNode(true);
        if (i === 0) {
          parentNode.innerHTML = "";
        } else {
          delete clone.dataset.translation;
        }
        clone.innerHTML = t[language];
        parentNode.appendChild(clone);
      })
    }
  })
}

function switchLanguage() {
  language = language === "en" ? "cs" : "en";
  displaySelectedLanguage(language);
}

function getNotedTranslation(key) {
  let keys = key.split('.');
  let data = translations;
  while(keys.length > 0) {
    let key = keys.shift();
    data = data[key];
  }
  return data
}

fetch('./data/translations.json').then((response) => {
  return response.json();
}).then((data) => {
  translations = data;
  displaySelectedLanguage(language);
}).catch((error) => {
  console.log(error);
  document.querySelector('#langSwitcher').style.display = 'none';
})