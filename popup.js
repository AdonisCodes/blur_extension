

const link = document.getElementById('donate')

link.addEventListener('click', function(event) {
    event.preventDefault();
    chrome.tabs.create({ url: link.href });
  });