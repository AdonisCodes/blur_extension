function removeShortsSearch() {
    try {
        const shorts = document.evaluate(
            "//ytd-reel-shelf-renderer",
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null
        );

        for (let i = 0; i < shorts.snapshotLength; i++) {
            console.log("deleting shorts renderer", shorts.snapshotItem(i), "in search results");
            shorts.snapshotItem(i).remove();
        }
    }
    catch(e) {
        console.log(e);
    }
}

const shortRemovalIntervalSearch = setInterval(removeShortsSearch, 50);