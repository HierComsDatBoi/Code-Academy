"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TripCard_js_1 = __importDefault(require("./TripCard.js"));
const Register_js_1 = __importDefault(require("./Register.js"));
const Login_js_1 = __importDefault(require("./Login.js"));
const registerModal = document.querySelector('#registerModal');
const registerBtn = document.querySelector('#registerBtn');
const closeRegister = document.querySelector("#closeRegister");
registerBtn.onclick = function () {
    registerModal.style.display = "block";
    document.querySelector('#errorRegister').classList.add('hidden');
};
closeRegister.onclick = function () {
    registerModal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target === registerModal) {
        registerModal.style.display = "none";
    }
};
(0, Register_js_1.default)();
const loginModal = document.querySelector('#loginModal');
const loginBtn = document.querySelector('#loginBtn');
const closeLogin = document.querySelector("#closeLogin");
loginBtn.onclick = function () {
    loginModal.style.display = "block";
    document.querySelector('#errorLogin').classList.add('hidden');
};
closeLogin.onclick = function () {
    loginModal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};
(0, Login_js_1.default)();
document.querySelector('#logout').addEventListener('click', () => {
    var _a;
    ((_a = document.querySelector('#formSection')) === null || _a === void 0 ? void 0 : _a.firstElementChild).classList.remove('hidden');
    document.querySelector('#loginBtn').classList.remove('hidden');
    document.querySelector('#registerBtn').classList.remove('hidden');
    document.querySelector('#form').classList.add('hidden');
    document.querySelector('#logout').classList.add('hidden');
});
function fetchAndDisplay() {
    fetch('http://localhost:3000/trip')
        .then(res => res.json())
        .then(trips => {
        const tripOutput = document.querySelector('#tripOutput');
        tripOutput.innerHTML = '';
        trips.forEach((trip) => {
            const tripCardDiv = new TripCard_js_1.default(trip).render();
            tripOutput.appendChild(tripCardDiv);
        });
    });
}
fetchAndDisplay();
document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const tripData = {
        city: form.elements.namedItem('city').value,
        country: form.elements.namedItem('country').value,
        date: form.elements.namedItem('date').value,
        photo: form.elements.namedItem('photo').value
    };
    fetch('http://localhost:3000/trip', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tripData)
    }).then(res => res.json())
        .then(fetchAndDisplay);
    form.reset();
});
