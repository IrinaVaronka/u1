import { useEffect, useState } from "react";

function Edit ({setEditData, modalData, setModalData}) {


    const [size, setSize] = useState('');


    useEffect(() => {
        if (null === modalData) {
            return;
        }

        setSize(modalData.size);

    }, [modalData]);

    

    const doFundSize = e => {
        setSize(e.target.value);
    }

    const edit = () => {
        setEditData({
            size,
            id: modalData.id
        });
        setModalData(null);
    }
    const rem = _ => {
        setSize(0);
     }

    if (null === modalData) {
        return null;
    }
    

    return (


        <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit funds</h5>
                    <button type="button" className="btn-close" onClick={() => setModalData(null)}></button>
                </div>
                <div className="modal-body">
                    <div className="card">
                        <div className="card-body">
                            <div className="m-3">
                                <label className="form-label">Enter your funds</label>
                                <input type="text" className="form-control"min='0' onChange={doFundSize} value={size} />
                            </div>
                        
                            
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" onClick={rem}>deduct funds</button>
                    <button type="button" className="btn btn-outline-primary" onClick={edit}>add funds</button>
                </div>
            </div>
        </div>
    </div>

      
    )


}
export default Edit;


