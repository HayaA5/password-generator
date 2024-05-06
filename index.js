const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generatePasswordBtnEl = document.querySelector(".btn-generate")
const passwordsContainerEl = document.querySelector(".passwords-container")
const changeModeEl = document.getElementById("change-mode")
let isDarkMode = true;

function generatePassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        let index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }
    return password;
}

generatePasswordBtnEl.addEventListener("click", function () {
    passwordsContainerEl.innerHTML = ''
    passwordsContainerEl.appendChild(createPasswordEl())
    passwordsContainerEl.appendChild(createPasswordEl())
})

function createPasswordEl() {
    const passwordEl = document.createElement("div");
    passwordEl.className = "password";
    passwordEl.onclick = (e) => navigator.clipboard.writeText(e.target.innerText);
    passwordEl.textContent = generatePassword();
    return passwordEl;
}

changeModeEl.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
})