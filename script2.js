
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