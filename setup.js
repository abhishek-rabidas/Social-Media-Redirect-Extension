document.getElementById('setup-btn').addEventListener('click', function() {

    var git = document.getElementById('github').value;
    chrome.storage.sync.set({ "git": git });


    var stack = document.getElementById('stack').value;
    chrome.storage.sync.set({ "stack": stack });

    var gplus = document.getElementById('gmail').value;
    chrome.storage.sync.set({ "gplus": gplus });

    var fb = document.getElementById('facebook').value;
    chrome.storage.sync.set({ "fb": fb });

    var insta = document.getElementById('insta').value;
    chrome.storage.sync.set({ "insta": insta });

    var linkedin = document.getElementById('linkedin').value;
    chrome.storage.sync.set({ "linkedin": linkedin });

    alert("Uploaded");
    window.close();

});