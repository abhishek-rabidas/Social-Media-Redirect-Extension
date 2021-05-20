window.onload = function() {
    chrome.storage.sync.get('git', function(data) {
        document.getElementById('github-link').setAttribute('href', data.git);
    });
    chrome.storage.sync.get('stack', function(data) {
        document.getElementById('stack-link').setAttribute('href', data.stack);
    });
    chrome.storage.sync.get('gplus', function(data) {
        document.getElementById('g-link').setAttribute('href', data.gplus);
    });
    chrome.storage.sync.get('fb', function(data) {
        document.getElementById('fb-link').setAttribute('href', data.fb);
    });
    chrome.storage.sync.get('insta', function(data) {
        document.getElementById('insta-link').setAttribute('href', data.insta);
    });
    chrome.storage.sync.get('linkedin', function(data) {
        document.getElementById('linkedin-link').setAttribute('href', data.linkedin);
    });
}

document.getElementById('btn').addEventListener('click', function() {
    chrome.windows.create({ url: "./input.html", type: "panel" });
});