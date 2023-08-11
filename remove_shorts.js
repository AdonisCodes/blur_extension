function removeShortsVideos() {
    try {
        const shorts = document.evaluate(
            "//ytd-video-renderer[descendant::*[contains(@href, '/shorts')]]",
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null
        );

        for (let i = 0; i < shorts.snapshotLength; i++) {
            console.log("deleting a short", shorts.snapshotItem(i).nodeName);
            shorts.snapshotItem(i).remove();
        }
    }
    catch(e) {
        console.log(e);
    }
}

const shortRemovalInterval = setInterval(removeShortsVideos, 200); 