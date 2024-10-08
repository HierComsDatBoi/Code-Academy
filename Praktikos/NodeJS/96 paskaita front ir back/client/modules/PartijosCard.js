export default class PartijosCard{
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render(){
    const cardDiv = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = this.props.pavadinimas;

    cardDiv.append(heading);
    return cardDiv;
  }
}