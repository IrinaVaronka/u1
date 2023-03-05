import { useState } from "react";

function NewAccount () {

const [name, setName] = useState('');
const [lastName, setLastName] = useState('');
const [fullList, setFullList] = useState([]);


const doName = e => {
    setName(e.target.value);
}
const doLastName = e => {
    setLastName(e.target.value);
}

const addName = () => {
    setFullList(n => [...n, {name, lastName}]);
}



    return (
<>
        <div className="input-group col-sm-7">
        <span className="input-group-text">First name</span>
        <input className="text" aria-label="First name" class="form-control"onChange={doName} value={name}/>
        <span className="input-group-text">Last name</span>
        <input className="text" aria-label="Last name" class="form-control" onChange={doLastName} value={lastName}/>
        <button className="btn btn-primary" type="create" onClick={addName}>Create new account</button>  
        </div>

<div className="container">
<div className="row align-items-start">
<ul className="col">
<li className="list-group-item">Name</li>
</ul>
<ul className="col">
<li className="list-group-item">Last Name</li>
</ul>
<ul className="col">
<li className="list-group-item">Account amount</li>
</ul>

</div>
</div>  

<div className="container">
<div className="row align-items-start">
  <ul className="col">
    {
      
      fullList.map((n, i) => <li key={i} className="list-group-item">{n.name}</li>)
    }
  </ul>
  <ul className="col">
    {
    fullList.map((n, i) => <li key={i} className="list-group-item">{n.lastName}</li>)
    }
  </ul>
  <ul className="col">
    
  </ul>
</div>
</div>
   
</>

    )
}
export default NewAccount;