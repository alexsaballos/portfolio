import AOS from "aos";

export function aosInit() {
  const htmlElement = document.documentElement;

  const runAOS = () => {
    // Only initialize when html is finally visible to avoid 0px bounding box calculations
    if (window.getComputedStyle(htmlElement).visibility !== "hidden") {
      AOS.init({
        duration: 800
      });
      AOS.refresh();
    }
  };

  // If already visible, run immediately
  if (window.getComputedStyle(htmlElement).visibility !== "hidden") {
    runAOS();
  } else {
    // Watch for the theme-load.js script to make the HTML tag visible
    const observer = new MutationObserver(() => {
      if (window.getComputedStyle(htmlElement).visibility !== "hidden") {
        runAOS();
        observer.disconnect(); // Stop watching once initialized
      }
    });
    observer.observe(htmlElement, { attributes: true, attributeFilter: ["style", "class"] });
  }
}
