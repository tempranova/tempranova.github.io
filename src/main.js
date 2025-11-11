import './style.css'

// document.addEventListener("DOMContentLoaded", function () {
//   const body = document.body;
//   // Fade in on page load
//   requestAnimationFrame(() => body.classList.add("show"));

//   // Fade out before navigating
//   document.querySelectorAll("a[href]").forEach(link => {
//     const url = new URL(link.href);
//     const sameHost = url.host === location.host;

//     link.addEventListener("click", function (e) {
//       // Only fade out for internal links (not anchors or external)
//       if (!sameHost || link.target === "_blank" || link.href.includes("#")) return;
//       e.preventDefault();
//       body.classList.remove("show");
//       setTimeout(() => window.location = link.href, 1000); // match transition time
//     });
//   });
// });