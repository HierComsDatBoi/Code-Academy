export default function registerUser() {
  const registerForm = document.querySelector('#registerForm') as HTMLFormElement;
  
  registerForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      
      const target = e.target as HTMLFormElement;
      const password = (target.elements.namedItem('passwordRegister') as HTMLInputElement).value;
      const passwordRepeat = (target.elements.namedItem('passwordRegisterRepeat') as HTMLInputElement).value;

      const userData = {
          userName: (target.elements.namedItem('userNameRegister') as HTMLInputElement).value,
          password: (target.elements.namedItem('passwordRegister') as HTMLInputElement).value
      };

      const error = document.querySelector('#errorRegister') as HTMLElement;

      if (password !== passwordRepeat) {
          console.log('error password');
          error.classList.remove('hidden');
          error.textContent = 'Slaptažodžiai nesutampa';
      } else {
          fetch('http://localhost:3000/users')
              .then(res => res.json())
              .then(users => {
                  let userExists = false;
                  users.forEach((user: any) => {
                      if (userData.userName === user.userName) { // Check if the username already exists
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
