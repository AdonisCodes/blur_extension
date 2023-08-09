function deleteShorts(mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            for (const addedNode of mutation.addedNodes) {
                if (addedNode.nodeName.toLowerCase() === "ytd-reel-shelf-renderer") {
                    addedNode.remove();
                }
            }
        }
    }
}

const observer = new MutationObserver(deleteShorts);
observer.observe(document, { childList: true, subtree: true });