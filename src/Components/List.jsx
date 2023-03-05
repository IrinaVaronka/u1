function List({ list, setDeleteData, setModalData}) {

    const destroy = n => {
        setDeleteData(n);
    }

    const edit = n => {
        setModalData(n);
    }

    if (null === list) {
        return (
            <div className="card mt-5">
                <div className="card-header">
                    <h2>LOADING...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="card mt-5">
        <div className="card-header">
            <h2>List of accounts</h2>
        </div>
        <div className="card-body">
            <ul className="list-group">
                { 
                
                    list.length ? list.map(n => <li key={n.id} className="list-group-item">
                        {n.name} {n.size}
                        
                        <div className="ed-button" onClick={() => edit(n)}></div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className = "btn btn-primary me-md-2" onClick={() => destroy(n)}>Delete account </button>
                        <button type="button" className = "btn btn-primary me-md-2" onClick={() => edit(n)}>Edit funds</button>
                        </div>
                        </li>)
                    :
                    <li className="list-group-item">No accounts yet</li>
                }
            </ul>
        </div>
    </div>
)
    
}

export default List;