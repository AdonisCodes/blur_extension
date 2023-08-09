function deleteShorts(mutationList, observer) {
    for (const mutation of mutationList) {
        for (const addedNode of mutation.addedNodes) {
            if (addedNode.nodeName.toLowerCase() === "ytd-reel-shelf-renderer") {
                addedNode.remove();
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
});

const observer = new MutationObserver(deleteShorts);
observer.observe(document, { childList: true, subtree: true });