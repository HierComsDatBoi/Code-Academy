export default class Calculator{
    constructor(calculator){
        this.calculator = calculator;
        this.memory = null; // skaicius saugomas atmintyje
        this.visual = '0'; // skaicius ekrane
        this.action = null; // veiksmas kuri reikia atlikti
    }

    renderVisual(){
        this.calculator.children[0].textContent = this.visual;
    }

    addNumber(nr){
        console.log(nr);
        if(this.visual === '0' && nr === '0'){
            return;
        } else if(this.visual === '0' && nr !== '0' && nr !== '.') {
            this.visual = nr;
        } 
        else if(nr !== '0'){
            return;

        } else {
            this.visual = (this.visual + nr).toString;
        }
        this.renderVisual();
    }

    addAction(symbol){
        console.log(symbol);
    }
}