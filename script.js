addEventListener("click",function(a){if(a.target.parentElement&&a.target.parentElement.className==="switcher"){var o=a.target.className;if(/^(cli|js|go)[23]$/.test(o)){for(var l=a.target.offsetTop-document.body.scrollTop,d=o==="cli3"?3:2;d<=3;d++)document.body.dataset["mode"+d]=o.slice(0,-1),localStorage.setItem("mode"+d,o.slice(0,-1));var c=a.target.offsetTop-document.body.scrollTop;document.body.scrollTop+=c-l}if(/^(unix|windows)2$/.test(o)){var l=a.target.offsetTop-document.body.scrollTop;document.body.dataset.os2=o.slice(0,-1),localStorage.setItem("os2",o.slice(0,-1));var c=a.target.offsetTop-document.body.scrollTop;document.body.scrollTop+=c-l}}}),addEventListener("DOMContentLoaded",function(){function a(){for(var t,r,m,n=0;n<s.length;n++){var e=s[n];if(e.getBoundingClientRect().top>10)break;e.dataset.h3?(t=document.getElementById(e.dataset.h2),r=document.getElementById(e.dataset.h3),m=e):e.dataset.h2?(t=document.getElementById(e.dataset.h2),r=e,m=null):(t=e,r=null,m=null)}for(var n=0;n<s.length;n++){var e=s[n];e.tagName!=="H4"&&document.getElementById("nav-"+e.id).classList.toggle("current",e===t||e===r)}var e=m||r||t;i=location.pathname+(e?"#"+e.id:""),u===null&&(u=setTimeout(o,300))}function o(){u=null,location.pathname+location.hash!==i&&history.replaceState(null,"",i)}var l=document.getElementById("menutoggle"),d=document.getElementById("shadow"),c=document.getElementById("menu"),v=document.querySelector("nav");l.addEventListener("click",function(){c.scrollTop=0,v.classList.add("open")}),d.addEventListener("click",function(t){v.classList.remove("open")});var i,u=null,s=document.querySelectorAll("h2, h3, h4");addEventListener("scroll",a,{passive:!0}),addEventListener("load",a);function f(){return h.matches?"light":"dark"}function g(t){localStorage.setItem("theme",t),document.body.dataset.theme=t}addEventListener("storage",function(){document.body.dataset.theme=localStorage.getItem("theme")}),document.getElementById("theme").addEventListener("click",function(){var t=f();g(document.body.dataset.theme===t?null:t)});var h=matchMedia("(prefers-color-scheme: dark)");function p(){document.body.dataset.theme!==f()&&g(null)}try{h.addEventListener("change",p)}catch(t){h.addListener(p)}});