//import { useState } from "react";
//import { v4 as uuidv4 } from 'uuid';

import { useState } from "react";

function NewAccount ({setCreateData}) {


    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [size, setSize] = useState(0);


    const doName = e => {
        setName(e.target.value);
    }
    const doLastName = e => {
        setLastName(e.target.value);
    }

    const doFundSize = e => {
        setSize(e.target.value);
    }

    const create = () => {
        setCreateData({
            name,
            lastName,
            size
        });
        setName('')
        setLastName('')
        setSize(0)
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>New account</h2>
            </div>
            <div className="card-body">
            <div className="m-3">
                <label className="form-label">Enter your name</label>
                <input type="text" className="form-control" onChange={doName} value={name}/>
                <label className="form-label">Enter your last name</label>
                <input type="text" className="form-control" onChange={doLastName} value={lastName}/>
            </div>
            <div className="m-3">
            <label className="form-label">An initial amount is 0 <i>{doFundSize}</i></label>
            
        </div>
        
            <button type="button" className = "btn btn-primary m-4" onClick={create}>Create new account</button>

            </div>
        </div>
    )


}
export default NewAccount;


// const [name, setName] = useState('');
// const [lastName, setLastName] = useState('');
// const [fullList, setFullList] = useState([]);


// const doName = e => {
//     setName(e.target.value);
// }
// const doLastName = e => {
//     setLastName(e.target.value);
// }

// const addName = () => {
//     setFullList(l => [...l, 
//         {
//         id: uuidv4(),
//         name, 
//         lastName
//     }
// ]);
//     setName('');
//     setLastName('');
// }

// const del = id => {
//     setFullList(l => l.filter(l => id !== l.id));
// }


/* <>
        <div className="input-group col-sm-7">
        <span className="input-group-text">First name</span>
        <input className="text" aria-label="First name" class="form-control"onChange={doName} value={name}/>
        <span className="input-group-text">Last name</span>
        <input className="text" aria-label="Last name" class="form-control" onChange={doLastName} value={lastName}/>
        <button className="btn btn-primary" type="create" onClick={addName}>Create new account</button>  
        </div>

<div className="container">
<div className="row align-items-start">
<ul className="col-4">
<li className="list-group-item">Name</li>
</ul>
<ul className="col-4">
<li className="list-group-item">Last Name</li>
</ul>
<ul className="col-2">
<li className="list-group-item">Account amount</li>
</ul>
<ul className="col-2">
<li className="list-group-item">Account action</li>
</ul>

</div>
</div>  

<div className="container">
<div className="row align-items-start">
  <ul className="col-4">
    {
      fullList.map((n, i) => <li key={i} className="list-group-item">{n.name}</li>)
    }
   
  </ul>
  <ul className="col-4 horizontal">
    {  
    fullList.map((n, i) => <li key={i} className="list-group-item">{n.lastName}
    <button className="btn btn-primary" onClick={() => del(n.id)}>Delete account</button>
    </li>)
    }
  </ul>
  <ul className="col-2">
  <li className="list-group-item"></li>
  </ul>
  <ul className="col-2">
   
  </ul>
</div>
</div>
   
</> */

    