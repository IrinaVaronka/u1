
function NewAccount () {





    return (

        <div className="input-group col-sm-7">
        <span className="input-group-text">First name</span>
        <input className="text" aria-label="First name" class="form-control"></input>
        <span className="input-group-text">Last name</span>
        <input className="text" aria-label="Last name" class="form-control"></input>
        <button className="btn btn-primary" type="submit">Create new account</button>
        </div>

    )
}
export default NewAccount;