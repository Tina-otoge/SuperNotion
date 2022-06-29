// ==UserScript==
// @name     SuperNotion
// @version  1
// @grant    none
// @include  https://*.notion.so/*
// ==/UserScript==

const static_icon = "https://notion.so/front-static/logo-ios.png";
const favicon = document.querySelector("[rel='shortcut icon']");
console.log(favicon);
new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type !== "attributes" || mutation.attributeName !== "href")
      return
  }
  console.log("mutation");
  if (favicon.href !== static_icon)
  	favicon.href = static_icon; 
}).observe(favicon, { attributes: true });
