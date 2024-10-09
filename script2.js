
const slideHeader = document.querySelector('section.header');
const slideBody = document.querySelector('section.body');
let pageHeight = slideHeader.clientHeight;

window.addEventListener("resize", () => {
  pageHeight = slideHeader.clientHeight;
  console.log("resized", pageHeight)
})

document.addEventListener("scroll", (event) => {
  const scrollY = window.scrollY;
  handleHeader(scrollY);
  handleSecond(scrollY - 1 * pageHeight);
});

function handleHeader(scrollY) {
  if (scrollY > 20) {
    slideHeader.classList.add('lightup');
  } else {
    slideHeader.classList.remove('lightup');
  }
}

function handleSecond(pos) {
  if (pos > -400) {
    slideBody.classList = 'panel body b02';
  }
  if (pos > -300) {
    slideBody.classList = 'panel body b01';
  }
  if (pos > -200) {
    slideBody.classList = 'panel body b1';
  }
  if (pos > -100) {
    slideBody.classList = 'panel body b2';
  }
  if (pos > 0) {
    slideBody.classList = 'panel body b3';
  }
  if (pos > 100) {
    slideBody.classList = 'panel body b4';
  }
  if (pos > 200) {
    slideBody.classList = 'panel body b5';
  }
  if (pos > 300) {
    slideBody.classList = 'panel body b6';
  }
  if (pos > 400) {
    slideBody.classList = 'panel body b7';
  }
  if (pos > 500) {
    slideBody.classList = 'panel body b8';
  }
  if (pos > 600) {
    slideBody.classList = 'panel body b9';
  }
}

const ulShows = document.querySelector('#shows');
const ulShowsLiNone = document.querySelector('li.no-shows');
fetch('./data/shows.json').then((response) => {
  return response.json();
}).then((data) => {
  if (data.length > 0) {
    ulShowsLiNone.style.display = 'none';
  }
  data.forEach((show) => {
    const li = document.createElement('li');
    let html = '';
    html += `${show.date} `;
    html += show.time ? `(${show.time}) ` : '';
    html += `${show.title}`;
    html += show.location ? ` @ ${show.location}` : '';
    html += show.url ? ` <a href="${show.url}" target="_blank">[link]</a>` : '';
    li.innerHTML = html;
    ulShows.appendChild(li);
  })
}).catch((error) => {
  const li = document.createElement('li');
  li.innerHTML = ``;
  ulShows.appendChild(li);
})