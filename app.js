const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// ------------------------------------- //
// function onLoginBtnClick() {
//     console.log(loginInput.value);
// }
// ------------------------------------- //
// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if (username == "") {
//         alert("Please write your name.");
//     } else if (username.length > 15) {
//         alert("Your name is too long.")
//     }
// }
// loginButton.addEventListener("click", onLoginBtnClick);
// javascript 대신에 html의 도움을 받을 수 있음 밑에는 기존의 html 코드임
//<body>
//    <div id="login-form">
//        <input type="text" placeholder="What is your name?" />
//        <button>Log In</button>
//    </div>
//    <script src="app.js"></script>
//</body>

const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
// ------------------------------------- //