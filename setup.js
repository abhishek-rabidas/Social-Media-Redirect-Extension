document.getElementById('setup-btn').addEventListener('click', setup());
let git;
let stack;
let gplus;
let fb;
let insta;
let linkedin;

function setup() {
    git = document.getElementById('github').value;
    stack = document.getElementById('stack').value;
    gplus = document.getElementById('gmail').value;
    fb = document.getElementById('facebook').value;
    insta = document.getElementById('insta').value;
    linkedin = document.getElementById('linkedin').value;

    document.getElementById('github-link').setAttribute('href', git);
    document.getElementById('stack-link').setAttribute('href', stack);

}