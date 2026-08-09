// Changing the theme after the page has loaded. Picking it in the first place
// belongs to the is:inline script in Layout.astro's <head>, which has to run
// before the first paint; this half has nothing to do until someone clicks, so
// it rides along in the bundle instead.
const root = document.documentElement;

// Writing to localStorage is what turns a choice into a preference: from then
// on the head script reads it and stops consulting the OS.
document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-bs-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {}
});

// Follow the OS live, but only for visitors who have never used the toggle --
// once they have, their choice outranks it. localStorage is wrapped for the
// same reason it is in the head script: blocked site data makes it throw rather
// than return null.
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  let stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch {}
  if (stored !== "light" && stored !== "dark") {
    root.setAttribute("data-bs-theme", event.matches ? "dark" : "light");
  }
});
