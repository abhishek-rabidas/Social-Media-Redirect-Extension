window.onload = function() {
    chrome.storage.sync.get('git', function(data) {
        document.getElementById('github-link').setAttribute('href', data.git);
    });

}