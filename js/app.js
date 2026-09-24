/* Offline-Funktion (Service Worker) */
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function (err) {
      console.warn("Service Worker konnte nicht registriert werden:", err);
    });
  });
}
