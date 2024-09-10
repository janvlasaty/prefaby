
// init
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave',
    duration: "100%" // this works just fine with duration 0 as well
    // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
  }
});

// get all slides
// var slides = document.querySelectorAll("section.panel");

const slideHeader = document.querySelector('section.header');
const headerContent = document.querySelector('.header-content');
new ScrollMagic.Scene({
  triggerElement: slideHeader,
})
  .setPin(slideHeader, { pushFollowers: false })
  .on("update", function (e) {
    // console.log("Scene entered.", e);
    if (e.scrollPos > 10) {
      // console.log("Scene event.");
      slideHeader.classList.add('lightup');
    } else {
      slideHeader.classList.remove('lightup');
    }
  })
  .on("start enter", (e) => {
    headerContent.classList.remove('hidden');
  })
  .on("end leave", (e) => {
    headerContent.classList.add('hidden');
  })
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

const slideBody = document.querySelector('section.body');
new ScrollMagic.Scene({
  triggerElement: slideBody
})
  .setPin(slideBody, { pushFollowers: false })
  .on("update", function (e) {
    // console.log("Scene entered.", e.currentTarget.scrollOffset(), e.scrollPos);
    const pos = e.currentTarget.scrollOffset() - e.scrollPos
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
  })
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

const slideTrailer = document.querySelector('section.trailer');
new ScrollMagic.Scene({
  triggerElement: slideTrailer
})
  .setPin(slideTrailer, { pushFollowers: false })
  .on("update", function (e) {

  })
  // .addIndicators()
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

const slideAwards = document.querySelector('section.awards');
new ScrollMagic.Scene({
  triggerElement: slideAwards
})
  .setPin(slideAwards, { pushFollowers: false })
  // .addIndicators()
  .addTo(controller);


const slideFooter = document.querySelector('section.footer');
new ScrollMagic.Scene({
  triggerElement: slideFooter
})
  .setPin(slideFooter, { pushFollowers: false })
  // .addIndicators()
  .addTo(controller);

// create scene for every slide
// for (var i = 0; i < slides.length; i++) {
//   new ScrollMagic.Scene({
//     triggerElement: slides[i]
//   })
//     .setPin(slides[i], { pushFollowers: false })
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
// }


