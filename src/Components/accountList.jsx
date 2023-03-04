
function AccountList () {

const name1 = [
    {name: 'Maria', lastname: 'Gaga', amount: 16},
    {name: 'Filip', lastname: 'Li', amount: 59}
]



    return (

        <table className="table table-dark table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Account amount, $ </th>
      <th scope="col">Delete account</th>
      <th scope="col">Enter value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        {
            name1.map((n, i) => <th key={i} scope="row">{n.name}</th>)
        }
      <td>Jackson</td>
      <td>99</td>
      <td> <button className="btn btn-primary" type="submit">Delete</button></td>
      <td> 
        <input className="text form-control"></input>
        <button className="btn btn-primary add" type="submit">Add funds</button>
        <button className="btn btn-primary deduct" type="submit">Deduct funds</button></td>
      <td></td>
    </tr>
  </tbody>
</table>

    )
}
export default AccountList;