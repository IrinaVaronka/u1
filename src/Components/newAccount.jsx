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
        if (name.trim() !== '' && lastName.trim() !== ''){
        setCreateData({
            name,
            lastName,
            size
        });
        setName('')
        setLastName('')
        setSize(0)
    } else {
        alert ("Please enter name and lastname");
    }
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


