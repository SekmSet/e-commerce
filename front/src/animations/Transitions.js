import { TimelineMax } from "gsap";

export const pageTransition = (inOut, changePage) => {
  const tl = new TimelineMax({
    onComplete: () => {
      document.getElementById("anim").style.display = "none";
      if (changePage) changePage();
    },
  });
  //We start at the top and we end at the bottom
  const { yStart, yEnd } =
    inOut === "in" ? { yStart: 0, yEnd: 100 } : { yStart: -100, yEnd: 0 };
  tl.set("#anim", { yPercent: yStart, display: "block" }).to("#anim", 1, {
    yPercent: yEnd,
  });
};
