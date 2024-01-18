export const smoothScroll = () => {
  document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
      let target = document.getElementById(window.location.hash.substring(1));
      if (target) {
        let pos = target.getBoundingClientRect().top;
        let header = document.querySelector(".c-header").clientHeight;
        let scroll = pos + window.scrollY - header;
        window.scrollTo({
          top: scroll,
          behavior: "smooth",
        });
      }
    }
  });
  let elems = document.querySelectorAll('a[href^="#"]');
  if (elems) {
    elems.forEach((elem) => {
      let href = elem.getAttribute("href").split("#")[1];
      if (href) {
        let target = document.getElementById(href);
        if (target) {
          elem.addEventListener("click", (e) => {
            e.preventDefault();
            let pos = target.getBoundingClientRect().top;
            let header = document.querySelector(".c-header").clientHeight;
            let scroll = pos + window.scrollY - header;
            window.scrollTo({
              top: scroll,
              behavior: "smooth",
            });
          });
        }
      }
    });
  }
};
