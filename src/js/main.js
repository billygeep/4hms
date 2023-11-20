(function () {
  class Main {
    constructor() {
      this.app = document.getElementById("app");
      this.arrow = document.getElementById("arrow");
      this.contact = document.getElementById("contact");
      this.lottie = document.getElementById("lottie");
      this.loader = document.getElementById("loader");

      setTimeout(() => {
        this.app.style.transition = "1s";
        this.app.style.opacity = 1;

        const player = document.querySelector("dotlottie-player");

        player.addEventListener("ready", () => {
          this.loader.style.display = "none";
          player.play();
        });
        player.addEventListener("complete", () => {
          this.lottie.style.opacity = 0;

          setTimeout(() => {
            this.phaseTwo();
            window.addEventListener("scroll", () => {
              this.checkScroll();
            });
            player.pause();
            player.seek(8);
            this.lottie.classList.add("active");
          }, 1000);
        });
        player.load("./data.lottie");
      }, 1000);
    }

    phaseTwo() {
      const els = document.getElementsByClassName("phase-two");

      for (let i = 0; i < els.length; i++) {
        els[i].style.opacity = 1;
      }

      this.contact.classList.add("active");
      this.app.classList.add("active");
    }

    checkScroll() {
      const scrollY = window.scrollY;

      this.arrow.style.opacity = scrollY < 5 ? 1 : 0;
    }
  }

  const main = new Main();
})();
