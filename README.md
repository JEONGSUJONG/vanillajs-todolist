# Vanilla-JavaScript로 크롬 앱 만들기

[😮‍💨 노마드코드 강의 바로가기](https://nomadcoders.co/javascript-for-beginners/lobby)

<details>
<summary>2024.01.10</summary>
<h2>#4.5 Saving Username</h2>
<h4>#4.5localStorage 확인하기.</h4>

- 관리자 도구 -> Application -> Storage
- <a href = "https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage">localStroage 다양한 사용법</a>

- 관리자 도구 (콘솔)
  - `localStorage.setItem("username","bokyung")`
  - `localStorage.getItem("username")`
  - `localStorage.removeItem("username")`

- app.js
  - `localStorage.setItem("username",username)` 추가

<h2>#4.6 Loading Username</h2>
<h4>localStorage에 유저 정보가 있지만 새로고침 후 form이 유지되는 문제점</h4>

- app.js
  - `const savedUsername = localStorage.getItem("username")`
  - `username` 이 반복되어 사용되므로 `const USERNAME_KEY = "username"` 을 지정해준다.
  - 본인이 생성한 string을 반복해서 사용할 경우 대문자 변수로 지정해준다.
```javascript
const savedUsername = localStorage.getItem(USERNAME_KEY)
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${savedUsername}`;
}
```
  - `paintGreeting` : innerText와 HIDDEN_CLASSNAME 의 중복으로 함수로 정의해준다.
```javascript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting();
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting();
}
```
<h2>#4.7 Super Recap</h2>
<h4>Recap</h4>

- html 의 `form` 과 `h1` 태그 내에는 `hidden` 클래스가 포함됨.
- css 에서의 `.hidden` 은 `displat:none` 을 통해 요소를 숨겨줌.
- javascript 에서는 localStorage 유무를 가장 먼저 확인
- 최초 웹사이트 접속시 localStorage 에는 null 이기에 loginForm의 `hidden` 클래스를 지워준다 (즉 loginForm을 표시한다.)
- `addEventListener` 가 실행되어 `onLoginSubmit` 을 실행한다.
- `onLoginSubmit`
  - 브라우저의 기본 동작을 막는다.
  - loginForm 의 `hidden` 을 다시 추가한다.
  - value 저장
  - localStoage에 저장한다.
  - `paintGreetings` 함수를 실행한다. 인자로 Input한 username을 받는다.
    - 비어있는 h1 요소 안에 innerText로 입력한다.
    - `hidden` 클래스를 지워준다.

<h2>#5.0 Intervals</h2>
<h4>Folder Structure</h4>

```
├─ css
│   ├─ style.css
├─ js
│   ├─ clock.js
│   ├─ greeting.js
├─ .gitignore
├─ index.html
```
- interval : "매번" 일어나야 하는 무언가
- html body 에 `h2` 태그인 id 값으로 `clock` 지정
- clock.js
  - `const clock = document.querySelector("#clock");`
  - `setInterval('실행될 함수', '얼마 마다?(ms)')`
  - `sayHello` 함수가 5초마다 실행된다.gif
  - 
  ```javascript
    function sayHello() {
        console.log("Hello");
    }
    setInterval(sayHello, 5000);
  ```

<h2>#5.1 Timeouts and Dates</h2>
<h4>javascript 가 실행되자마자 실행하지 않는 방법</h4>

- `setTimeout('실행될 함수', '얼마나 기다릴지(ms)')` 
- `new Date()` : 오늘 날짜를 가져옴.
- <a href = "https://developer.mozilla.org/ko/docs/Web/javascript/Reference/Global_Objects/Date">Date 함수들</a>
- `const date = new Date()`
  - "년" 확인 : `date.getFullYear()`
  - "일" 확인 : `date.getDate()`
  - "요일" 확인 : `date.getDay()` : 일요일(0) ~ 토요일(6)
  - "시간" 확인 : `date.getHours()`
  - "분" 확인 : `date.getMinutes()`
  - "초" 확인 : `date.getSeconds()`
- `new Date().getSeconds()` 처럼 사용 가능.

- clock.js
```javascript
const clock = document.querySelector("#clock");
function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` // 백틱
}
getClock(); // 웹사이트 접속 시 즉시 현재 시간 보여줌.
setInterval(getClock, 1000);
```
- `gif 파일넣기`

<h2>#5.2 PadStart</h2>
<h4>padStart, padEnd</h4>

- `1, 2, 3, 4` 가 아닌 `01, 02, 03, 04` 로 표시하고 싶음.
  - string이 항상 적어도 2개의 문자를 가지고 있어야함.
  - `padStart()` : `"1".padStart(2, "0")` 는 2개의 문자를 가지고 있어야하고 없으면! 앞쪽에 "0"문자를 추가한다. -> `01`
      - "1" 대신에 `date.getSeconds()` 를 작성한다. (Hours, Minutes ...)
      - `padEnd(2,"0")` : 뒤에 0을 붙혀준다. : `"1".padEnd(2,"0")` -> `10`
      - 단, `getHours()` 는 문자열이 아닌 숫자이다.
        - `String(new Date().getHours())` 로 문자열로 변환해줘야함.
```javascript
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
```
- 참고
```javascript
function getClock() {
    clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
} 
```

- 오전/오후 표시
```javascript
function getClock() {
    clock.innerText = new Date().toLocaleTimeString();
}
```

--- 다른 페이지에 작성 ---
<h2>#6.0 Quotes</h2>
<h4>배열의 요소들 랜덤으로 span 태그에 넣기</h4>

- quotes.js
```javascript
const quotes = [
    {
        quote: "",
        author: ""
    },
];
// 10개의 quotes 배열의 요소안에 quote와 author 를 입력해줌.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```
```html
<div id="quote">
    <span></span>
    <span></span>
</div>
```
- `"#quote span:first-child"` : span 의 첫번째 요소
- `"#quote span:last-child"` : span 의 마지막 요소
- `quotes[Math.floor(Math.random() * quotes.length)]` : quotes 배열 중 랜덤으로 `todaysQuote` 에 할당.
- `innerText` 로 입력받음.

<h2>#6.1 Background</h2>
<h4>웹사이트 배경화면 넣기</h4>

```javascript
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
```

```html
<body>
  <form class=hidden id="login-form">
    <input required maxlength="15" type="text" placeholder="What is your name?" />
    <input type="submit" value="Log In" />
  </form>
  <h2 id="clock">00:00</h2>
  <h1 class="hidden" id="greeting"></h1>
  <div id="quote">
    <span></span>
    <span></span>
  </div>
  <script src="js/greeting.js"></script>
  <script src="js/clock.js"></script>
  <script src="js/quotes.js"></script>
  <script src="js/background.js"></script>
</body>
```
- `<img src = "img/0.jpg">` 가 추가된다.
- JS에서 html 요소를 생성 : `createElement(" ")`
  - 예를 들어,document.createElement("img")일 경우 html 내에 img 태그를 생성
- `appendChild()` : 함수 안의 경로에 정의한 값을 가장 뒤에 기입한다.
- `prepend()` : 반대로 앞에서부터 기입.


--- 다른 페이지에 작성 ---
<h2>#7.0 Setup</h2>
<h4>to do List</h4>

```html
  <form id="todo-form"><input type="text" placeholder="Write a To Do and Press"></form>
  <ul id="todo-list"></ul>
```

```javascript
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("Input");
// == document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```
- HTML에서 정의한 요소들에 대한 변수를 설정함으로써 각각의 요소에 쉽게 접근 가능.
- `handleTodoSubmit` 함수는 폼 제출 시 실행되며, 새로운 할 일을 입력받고, 입력값을 초기화하고, 필요한 로직을 추가할 수 있는 구조로 이루어짐.
- 이벤트 리스너를 통해 폼 제출 시 `handleTodoSubmit` 함수가 실행되도록 설정.

<h2>#7.1 Adding To do</h2>
<h4>Adding To Do</h4>

```javascript
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}
```
- Element `<li>` 생성한다.
- span을 사용한 이유는 해당 텍스트에 특정 스타일을 쉽게 적용하고, 향후 텍스트를 동적으로 조작하기 위한 DOM 조작의 유연성을 제공하기 위함이다.
- li 요소 안에 span을 추가하고 Input된 `newTodo`를 넣어준다. 
- `toDoList` id 에 해당하는 Element에 기입한다.

</details>


<details>
<summary>2024.01.11</summary>
<h2>#7.4 Loding To Dos part One</h2>
<h4>저장은 되지만 새로고침후 local에는 남아있고 화면에는 안보이는 문제점</h4>

1. `stringigy` 사용하여 배열을 안의 요소들을 문자열로 변환
2. `parse` 사용하여 object로 만들어 준다.
  - `localStorage.getItem("todos")` : `'["a","b","c"]'`
  - `JSON.parse(localStorage.getItem("todos"))` : `(3) ['a', 'b', 'c']`

<img width=100% alt="image" src="https://github.com/JEONGSUJONG/Readme_main/assets/142254876/14b472b6-bbcd-4185-b61c-d710ce08dde1">

```javascript
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
}
```

<img width=100% alt="image" src="https://github.com/JEONGSUJONG/Readme_main/assets/142254876/14187b08-209e-4330-88bf-fb83e68e3b1a">

#### `parsedToDos.forEach`
- `forEach` : 각각의 배열의 요소들을 한 번씩 실행 해준다.
  - `parsedToDos.forEach((item) => console.log("this is the turn of", item));`

<img width="344" alt="image" src="https://github.com/JEONGSUJONG/Readme_main/assets/142254876/21af73f2-d66d-4acb-9119-42d6d51ac4f2">


</details>