"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerUser;
function registerUser() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const target = e.target;
        const password = target.elements.namedItem('passwordRegister').value;
        const passwordRepeat = target.elements.namedItem('passwordRegisterRepeat').value;
        const userData = {
            userName: target.elements.namedItem('userNameRegister').value,
            password: target.elements.namedItem('passwordRegister').value
        };
        const error = document.querySelector('#errorRegister');
        if (password !== passwordRepeat) {
            console.log('error password');
            error.classList.remove('hidden');
            error.textContent = 'Slaptažodžiai nesutampa';
        }
        else {
            fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(users => {
                let userExists = false;
                users.forEach((user) => {
                    if (userData.userName === user.userName) {
                        userExists = true;
                        console.log('error existing');
                        error.classList.remove('hidden');
                        error.textContent = 'Toks vartotojas jau yra';
                    }
                });
                if (!userExists) {
                    fetch('http://localhost:3000/users', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(userData)
                    })
                        .then(res => res.json())
                        .then(data => {
                        console.log(data);
                        console.log('user added successfully');
                        error.classList.remove('hidden');
                        error.textContent = 'Vartotojas sukurtas';
                    })
                        .catch(err => {
                        console.error('Error adding user:', err);
                        error.classList.remove('hidden');
                        error.textContent = 'Klaida kuriant vartotoją';
                    });
                }
            });
        }
    });
}
