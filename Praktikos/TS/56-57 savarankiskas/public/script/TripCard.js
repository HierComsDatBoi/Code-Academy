"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TripCard {
    constructor({ id, city, country, date, photo }) {
        this.id = id;
        this.city = city;
        this.country = country;
        this.date = date;
        this.photo = photo;
    }
    render() {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('tripCard');
        const heading = document.createElement('h3');
        heading.textContent = this.city;
        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        image.setAttribute('src', this.photo);
        image.setAttribute('alt', `${this.city} thumbnail`);
        imageDiv.classList.add('imageDiv');
        imageDiv.appendChild(image);
        const infoDiv = document.createElement('div');
        const countryName = document.createElement('span');
        countryName.textContent = `Šalis: ${this.country}`;
        const tripDate = document.createElement('span');
        tripDate.textContent = `Planuojama data: ${this.date}`;
        infoDiv.classList.add('infoDiv');
        infoDiv.append(countryName, tripDate);
        cardDiv.append(heading, imageDiv, infoDiv);
        return cardDiv;
    }
}
exports.default = TripCard;
