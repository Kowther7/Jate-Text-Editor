const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false); // show thhe button to install the app
});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const event = window.deferredPrompt; // get event
  if (!event) {
    return;
  }
  event.prompt();
  window.deferredPrompt = null; // no event
  butInstall.classList.toggle("hidden", true); // hide the button for installing the app
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null; // no event
});
