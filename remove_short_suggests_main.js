function removeShortsMain() {
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
      
      catch(e) {
        console.log(e);
      }
}

const removeShortsMainInterval = setInterval(removeShortsMain, 1);