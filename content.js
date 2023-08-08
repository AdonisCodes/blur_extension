
const interval = setInterval(() => {
  let nodes = document.querySelectorAll(".yt-core-image--fill-parent-height");

  nodes.forEach((n) => {
    n.style.filter = "blur(20px)";
  });

  try {
    // searching shorts container with xpath
    let short = document.evaluate(
    "//h3/*[contains(@href, '/shorts')]/ancestor::ytd-rich-section-renderer[contains(@use-show-more-button, '')]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for (let i = 0; i < short.snapshotLength; i++) {
    console.log("deleted shorts suggestions renderer " + short.snapshotItem(i).nodeName);
    short.snapshotItem(i).remove();
  }
  }
  
  catch(e)
  {
    console.log(e);
  }
}, 1);
