!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){r=setInterval(a,1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));var r=null;function a(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.1de85a0c.js.map