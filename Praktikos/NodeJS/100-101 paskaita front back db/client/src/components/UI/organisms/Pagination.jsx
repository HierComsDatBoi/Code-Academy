const Pagination = () => {

  const pageSizeChange = (e) => {

  }

  return ( 
    <div>
      <select defaultValue={5} onChange={pageSizeChange}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>

    </div>
   );
}
 
export default Pagination;