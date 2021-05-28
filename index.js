function toggleDarkClass() {
  const DARK_CLASS = "dark";
  let bodyClassList = document.body.classList;

  if (bodyClassList.contains(DARK_CLASS)) {
    bodyClassList.remove(DARK_CLASS);
  } else {
    bodyClassList.add(DARK_CLASS);
  }
}

function calculateDocumentHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;

  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", () => {
  calculateDocumentHeight();
});

document.addEventListener("DOMContentLoaded", calculateDocumentHeight(), false);
