"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loginUser;
function loginUser() {
    const loginForm = document.querySelector('#loginForm');
    const loginModal = document.querySelector('#loginModal');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const target = e.target;
        const userData = {
            userName: target.elements.namedItem('userNameLogin').value,
            password: target.elements.namedItem('passwordLogin').value
        };
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(users => {
            let userFound = false;
            users.forEach((user) => {
                var _a;
                if (userData.userName === user.userName && userData.password === user.password) {
                    userFound = true;
                    loginModal.style.display = "none";
                    ((_a = document.querySelector('#formSection')) === null || _a === void 0 ? void 0 : _a.firstElementChild).classList.add('hidden');
                    document.querySelector('#loginBtn').classList.add('hidden');
                    document.querySelector('#registerBtn').classList.add('hidden');
                    document.querySelector('#form').classList.remove('hidden');
                    document.querySelector('#logout').classList.remove('hidden');
                }
            });
            if (!userFound) {
                const error = document.querySelector('#errorLogin');
                error.classList.remove('hidden');
                error.textContent = 'Patikrinkite duomenis arba užsiregistruokite';
            }
        });
        target.reset();
    });
}
