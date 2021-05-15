document.getElementById('setup-btn').addEventListener('click', setup());


function setup() {
    var git = document.getElementById('github').value;
    var stack = document.getElementById('stack').value;
    var gplus = document.getElementById('gmail').value;
    var fb = document.getElementById('facebook').value;
    var insta = document.getElementById('insta').value;
    var linkedin = document.getElementById('linkedin').value;

    /* document.getElementById('github-link').setAttribute('href', git);
    document.getElementById('stack-link').setAttribute('href', stack);
 */
    addData();
}

function addData() {
    const dbname = "Database";
    const requestDB = window.indexedDB.open(dbname);
    requestDB.onupgradeneeded = () => {
        var db = requestDB.result;
        var store = db.createObjectStore('links', { autoIncrement: true });
        store.put({
            title: "ABC",
            author: "SSSS"

        });
        store.put({
            title: "EFG",
            author: "XXXXXX"
        });
    }


    requestDB.onsuccess = () => {
        if (requestDB.readyState == "done")
            console.log("DATA UPLOADED");
    }
}