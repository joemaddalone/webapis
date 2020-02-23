const circle = document.querySelector(".circle");
let active = false;
btn.addEventListener("click", () => {
  active = !active;
  if (active) {
	btn.style.borderColor = "red";
	micAnimation = circle.animate(
	  [
		{ width: 0, height: 0, opacity: 1 },
		{ width: "90px", height: "90px", opacity: 0 }
	  ],
	  {
		duration: 1000,
		iterations: Infinity,
		easing: "ease-in-out"
	  }
	);
  } else {
	btn.style.borderColor = "white";
	micAnimation.cancel();
  }
});