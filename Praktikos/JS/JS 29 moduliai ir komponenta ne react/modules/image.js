export default class Image{
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
        return this.render();
    }
    render(){
        const image = document.createElement('img');
        image.setAttribute('src', this.src);
        image.setAttribute('alt', this.alt);
        return image;
    }
}