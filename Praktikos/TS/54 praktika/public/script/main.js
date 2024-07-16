"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FootballMatches_js_1 = __importDefault(require("./FootballMatches.js"));
const newFootballMatchForm = document.querySelector('#newFootballMatch');
newFootballMatchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(newFootballMatchForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
        if (key === 'team1goals' || key === 'team2goals') {
            if (value !== '') {
                formDataObject[key] = Number(value);
            }
        }
        else {
            formDataObject[key] = value;
        }
    });
    console.log(formDataObject);
});
fetch(`http://localhost:3000/europosFutbolo%C4%8CempionatoRungtyn%C4%97s`)
    .then(res => res.json())
    .then((data) => {
    data.forEach(match => {
        var _a;
        const matchCard = new FootballMatches_js_1.default(match).render();
        (_a = document.querySelector(`#matchesCards`)) === null || _a === void 0 ? void 0 : _a.appendChild(matchCard);
    });
});
