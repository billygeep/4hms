new class{constructor(){this.app=document.getElementById("app"),this.arrow=document.getElementById("arrow"),this.contact=document.getElementById("contact"),this.lottie=document.getElementById("lottie"),this.loader=document.getElementById("loader"),setTimeout((()=>{this.app.style.transition="1s",this.app.style.opacity=1;const t=document.querySelector("dotlottie-player");t.addEventListener("ready",(()=>{this.loader.style.display="none",t.play()})),t.addEventListener("complete",(()=>{this.lottie.style.opacity=0,setTimeout((()=>{this.phaseTwo(),window.addEventListener("scroll",(()=>{this.checkScroll()})),t.pause(),t.seek(8),this.lottie.classList.add("active")}),1e3)})),t.load("./_data.lottie")}),1e3)}phaseTwo(){const t=document.getElementsByClassName("phase-two");for(let e=0;e<t.length;e++)t[e].style.opacity=1;this.contact.classList.add("active"),this.app.classList.add("active")}checkScroll(){const t=window.scrollY;this.arrow.style.opacity=t<5?1:0}};
//# sourceMappingURL=index.7cb8212c.js.map
