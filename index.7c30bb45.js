var t=Array.from(document.querySelectorAll(".population")).map(function(t){return+t.textContent.replace(/,/g,"")}),e=t.reduce(function(t,e){return t+e}),n=e/t.length;document.querySelector(".total-population").textContent=e.toLocaleString("en-US"),document.querySelector(".average-population").textContent=n.toLocaleString("en-US");
//# sourceMappingURL=index.7c30bb45.js.map
