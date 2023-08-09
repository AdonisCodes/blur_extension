
const blurInterval = setInterval(() => {
  let nodes = document.querySelectorAll(".yt-core-image--fill-parent-height");

  nodes.forEach((n) => {
    n.style.filter = "blur(20px)";
  });
}, 1);
