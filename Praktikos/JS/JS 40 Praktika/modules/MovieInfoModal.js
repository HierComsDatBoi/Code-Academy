export default class MovieInfoModal{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    const modal = document.createElement('dialog');
    const mainModalDiv = document.createElement('div');
    const mainModalPar = document.createElement('p');
    mainModalPar.textContent = 'text';
    mainModalDiv.appendChild(mainModalPar);

    modal.appendChild(mainModalDiv);

    return modal;
  }
}