import { deleteToyById } from "./api/toyApi";
import { useRef } from "react";

const DeleteToy = () => {
    const toyIdRef = useRef(null);

    const sendToDelete = async () => {
        const toyId = toyIdRef.current.value;
        try {
            await deleteToyById(toyId)
            alert(' המחיקה התבצעה- עקב שכלול האתר תצטרכי לרענן כדי לראות תוצאות')
        }
        catch (err) {
            console.log(err);
            alert('שגיאה במחיקה')
        }
    }

    return (<>
        <label>כתוב את קוד המשחק אותו תרצה למחוק</label>
        <input type="text"  ref={toyIdRef} />
            <button onClick={sendToDelete}>Delete</button>
    </>);
}

export default DeleteToy;