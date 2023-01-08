import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = (props) => {

    const [confirm, setLine] = useState(false);
    const deleteData = () => {
        setLine(true);
        setLine(!confirm);
    }
    return (
        <div className="liststyle">
            <DeleteIcon className="deleteIcon"
                onClick={deleteData}
            />
            <li
                style={{ textDecoration: confirm ? 'line-through' : 'none' }}>
                {props.text}
            </li>
        </div>
    )
}
export default TodoList;