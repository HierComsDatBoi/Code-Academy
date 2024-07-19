export default function loginUser() {
  const loginForm = document.querySelector('#loginForm') as HTMLFormElement;
  const loginModal = document.querySelector('#loginModal') as HTMLElement;

  loginForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const target = e.target as HTMLFormElement;
      const userData = {
          userName: (target.elements.namedItem('userNameLogin') as HTMLInputElement).value,
          password: (target.elements.namedItem('passwordLogin') as HTMLInputElement).value
      };

      fetch('http://localhost:3000/users')
          .then(res => res.json())
          .then(users => {
              let userFound = false;
              users.forEach((user: any) => {
                  if (userData.userName === user.userName && userData.password === user.password) { // Check if user exists
                      userFound = true;
                      loginModal.style.display = "none";
                      (document.querySelector('#formSection')?.firstElementChild as HTMLElement).classList.add('hidden'); // Hide login message
                      (document.querySelector('#loginBtn') as HTMLElement).classList.add('hidden'); // Hide login button
                      (document.querySelector('#registerBtn') as HTMLElement).classList.add('hidden'); // Hide register button

                      (document.querySelector('#form') as HTMLElement).classList.remove('hidden'); // Show form
                      (document.querySelector('#logout') as HTMLElement).classList.remove('hidden'); // Show logout button
                  }
              });
              if (!userFound) {
                  const error = document.querySelector('#errorLogin') as HTMLElement;
                  error.classList.remove('hidden');
                  error.textContent = 'Patikrinkite duomenis arba užsiregistruokite';
              }
          });

      target.reset();
  });
}
