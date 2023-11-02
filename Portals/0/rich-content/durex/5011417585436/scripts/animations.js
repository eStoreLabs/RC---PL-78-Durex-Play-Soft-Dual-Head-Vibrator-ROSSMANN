// Get all elements with class .es-info__single
const infoElements = document.querySelectorAll(".es-info__single");

// Get all elements with class .es-slide__text-container
const slideElements = document.querySelectorAll(".es-slide__text-container");

// Get the element with class .es-kv__packshot
const kvPackshotElement = document.querySelector(".es-kv__packshot");

// Get the element with class .es-kv__title-container
const kvTitleElement = document.querySelector(".es-kv__title-container");

// Get all elements with class .es-features__single
const featureElements = document.querySelectorAll(".es-features__single");

// Define the ScrollMagic controller
const controller = new ScrollMagic.Controller();

// Define the ScrollMagic scene for each element

// Elements with class .es-info__single
infoElements.forEach(element => {
  const scene = new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 0.8, // Adjust this value as needed
    reverse: false
  })
  .addTo(controller)
  .on("enter", () => {
    element.classList.add("reveal");
  })
  .on("leave", () => {
    element.classList.remove("reveal");
  });
});

// Elements with class .es-slide__text-container
slideElements.forEach(element => {
  const scene = new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 0.8, // Adjust this value as needed
    reverse: false
  })
  .addTo(controller)
  .on("enter", () => {
    element.classList.add("reveal");
  })
  .on("leave", () => {
    element.classList.remove("reveal");
  });
});

// Element with class .es-kv__packshot
const kvPackshotScene = new ScrollMagic.Scene({
  triggerElement: kvPackshotElement,
  triggerHook: 0.8, // Adjust this value as needed
  reverse: false
})
.addTo(controller)
.on("enter", () => {
  kvPackshotElement.classList.add("reveal");
})
.on("leave", () => {
  kvPackshotElement.classList.remove("reveal");
});

// Element with class .es-kv__title-container
const kvTitleScene = new ScrollMagic.Scene({
  triggerElement: kvTitleElement,
  triggerHook: 0.8, // Adjust this value as needed
  reverse: false
})
.addTo(controller)
.on("enter", () => {
  kvTitleElement.classList.add("reveal");
})
.on("leave", () => {
  kvTitleElement.classList.remove("reveal");
});

// Elements with class .es-features__single
featureElements.forEach(element => {
  const scene = new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 0.8, // Adjust this value as needed
    reverse: false
  })
  .addTo(controller)
  .on("enter", () => {
    element.classList.add("reveal");
  })
  .on("leave", () => {
    element.classList.remove("reveal");
  });
});