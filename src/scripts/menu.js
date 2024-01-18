export const menu = () => {
  let btns = document.querySelectorAll(".c-menu-btn");
  let btn = Array.prototype.slice.call(btns, 0);
  let menu = document.querySelector("#menu");
  let float = document.querySelector(".c-float-bottom");
  let floatH = "";
  function btnDown() {
    if (float) {
      floatH = float.clientHeight;
      btns[0].style.bottom = `${floatH + 16}px`;
      document.querySelector(".c-footer").style.paddingBottom = `${floatH + 24}px`;
    }
    btns[0].style.opacity = "1";
    btns[0].style.visibility = "visible";
  }
  function init() {
    if (menu.getAttribute("tabindex") != "-1") {
      for (var k = 0; k < btns.length; k++) {
        btns[k].setAttribute("aria-expanded", "false");
        btns[k].blur();
      }
      menu.setAttribute("tabindex", "-1");
      menu.setAttribute("aria-hidden", "true");
    }
  }
  function check() {
    if (menu.getAttribute("tabindex") == "-1") {
      for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute("aria-expanded", "true");
        btns[i].blur();
      }
      menu.setAttribute("tabindex", "");
      menu.setAttribute("aria-hidden", "false");
    } else {
      for (var j = 0; j < btns.length; j++) {
        btns[j].setAttribute("aria-expanded", "false");
        btns[j].blur();
      }
      menu.setAttribute("tabindex", "-1");
      menu.setAttribute("aria-hidden", "true");
    }
  }
  btn.forEach((target) => {
    target.addEventListener("click", () => {
      check();
    });
  });
  window.addEventListener("load", () => {
    init();
    btnDown();
  });
  window.addEventListener("resize", () => {
    init();
    btnDown();
  });
};
