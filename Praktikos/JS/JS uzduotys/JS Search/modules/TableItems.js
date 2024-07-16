export default class TableItems{
  constructor(props){
    this.props = props;
    this.filter() = filter()
    return this.render();
  }

  render(){
    const tableRow = document.createElement('tr')
    const tdID = document.createElement('td');
    const tdName = document.createElement('td');
    const tdRating = document.createElement('td');

    tdID.textContent = this.props.id;
    tdName.textContent = this.props.title;
    tdRating.textContent = this.props.IMDB.totalScore;
    tableRow.append(tdID, tdName, tdRating);
    return tableRow;
  }

  filter(){
    
  }
}
