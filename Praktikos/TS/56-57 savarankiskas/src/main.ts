import TripCard from "./TripCard.js";
import registerUser from "./Register.js";
import loginUser from "./Login.js";

// Register

// Get the modal
const registerModal = document.querySelector('#registerModal') as HTMLElement;

// Get the button that opens the modal
const registerBtn = document.querySelector('#registerBtn') as HTMLElement;

// Get the <span> element that closes the modal
const closeRegister = document.querySelector("#closeRegister") as HTMLElement;

// Hide error message when opening modal

// When the user clicks the button, open the modal 
registerBtn.onclick = function () {
    registerModal.style.display = "block";
    (document.querySelector('#errorRegister') as HTMLElement).classList.add('hidden');
}

// When the user clicks on <span> (x), close the modal
closeRegister.onclick = function () {
    registerModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event: MouseEvent) {
    if (event.target === registerModal) {
        registerModal.style.display = "none";
    }
}

// Registration
registerUser();

// Login

// Get the modal
const loginModal = document.querySelector('#loginModal') as HTMLElement;

// Get the button that opens the modal
const loginBtn = document.querySelector('#loginBtn') as HTMLElement;

// Get the <span> element that closes the modal
const closeLogin = document.querySelector("#closeLogin") as HTMLElement;

// When the user clicks the button, open the modal 
loginBtn.onclick = function () {
    loginModal.style.display = "block";
    (document.querySelector('#errorLogin') as HTMLElement).classList.add('hidden');
}

// When the user clicks on <span> (x), close the modal
closeLogin.onclick = function () {
    loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event: MouseEvent) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
}

// Login
loginUser();

// Logout button functionality
(document.querySelector('#logout') as HTMLElement).addEventListener('click', () => {
    (document.querySelector('#formSection')?.firstElementChild as HTMLElement).classList.remove('hidden'); // Hide login message
    (document.querySelector('#loginBtn') as HTMLElement).classList.remove('hidden'); // Hide login button
    (document.querySelector('#registerBtn') as HTMLElement).classList.remove('hidden'); // Hide register button

    (document.querySelector('#form') as HTMLElement).classList.add('hidden'); // Show form
    (document.querySelector('#logout') as HTMLElement).classList.add('hidden'); // Show logout button
});

// TRIP data read

function fetchAndDisplay() {
    fetch('http://localhost:3000/trip')
        .then(res => res.json())
        .then(trips => {
            const tripOutput = document.querySelector('#tripOutput') as HTMLElement;
            tripOutput.innerHTML = '';
            trips.forEach((trip: any) => {
                const tripCardDiv = new TripCard(trip).render();
                tripOutput.appendChild(tripCardDiv);
            });
        });
}

// Initial data display
fetchAndDisplay();

// Create trip
(document.querySelector('#form') as HTMLFormElement).addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const tripData = {
        city: (form.elements.namedItem('city') as HTMLInputElement).value,
        country: (form.elements.namedItem('country') as HTMLInputElement).value,
        date: (form.elements.namedItem('date') as HTMLInputElement).value,
        photo: (form.elements.namedItem('photo') as HTMLInputElement).value
    };

    // Save data to data.json
    fetch('http://localhost:3000/trip', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tripData)
    }).then(res => res.json()) // Wait for response then fetch
        .then(fetchAndDisplay); // Refresh data display
    form.reset();
});
