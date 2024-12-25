import { func } from "./script1.js";

const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const errorMsgDiv = document.getElementById('error-msg');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        errorMsgDiv.innerText = 'Please fill in both username and password.';
        return;

    }


    if (username === 'amit_mahor_16' && password === '1') {

        errorMsgDiv.innerText = ''
        document.querySelector("body").style.backgroundColor = "black"
        document.querySelector('#login-form').style.display= "none"
        document.querySelector("section").style.display = "flex"
        document.querySelector(".container").style.display= "none"
        document.querySelector("section").style.display = "flex";

        
        
    } else {
        errorMsgDiv.innerText = 'Invalid username or password.';
     }
});
func()