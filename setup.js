document.getElementById('setup-btn').addEventListener('click', function() {
    var git = document.getElementById('github').value;

    chrome.storage.sync.set({ "git": git });
});








/* var stack = document.getElementById('stack').value;
var gplus = document.getElementById('gmail').value;
var fb = document.getElementById('facebook').value;
var insta = document.getElementById('insta').value;
var linkedin = document.getElementById('linkedin').value;

chrome.storage.sync.set({ "git": git }); */
/* document.getElementById('github-link').setAttribute('href', git);
    document.getElementById('stack-l-ink').setAttribute('href', stack);
 */