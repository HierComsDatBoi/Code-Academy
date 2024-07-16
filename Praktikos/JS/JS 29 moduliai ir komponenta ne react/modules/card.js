import Title from "./heading.js";
import Image from "./image.js";
import Paragraph from "./paragraph.js";

export default class Card{
    constructor({ title, image, paragraph}){
        this.title = title;
        this.image = image;
        this.paragraph = paragraph;
        return this.render();
    }
    render(){
        const div = document.createElement('div');
        div.classList.add('card');

        const title = new Title('3', this.title);

        const image = new Image(this.image.src, this.image.alt);

        const par = new Paragraph(this.paragraph);
        div.append(title, image, par);
        return div;
    }
}