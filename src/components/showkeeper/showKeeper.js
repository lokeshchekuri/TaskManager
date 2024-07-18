import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./showkeeper.css";

const ShowKeeper = ({ keeperList, setKeeperList }) => {
    const [editMode, setEditMode] = useState(null);
    const [editObj, setEditObj] = useState({
        title: "",
        description: ""
    });

    const deleteKeeper = (id) => {
        setKeeperList(prevList => prevList.filter(keeper => keeper._id !== id));
    };

    const startEdit = (keeper) => {
        setEditMode(keeper._id);
        setEditObj({
            title: keeper.title,
            description: keeper.description
        });
    };

    const cancelEdit = () => {
        setEditMode(null);
        setEditObj({
            title: "",
            description: ""
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditObj({
            ...editObj,
            [name]: value
        });
    };

    const saveEdit = (id) => {
        setKeeperList(prevList => prevList.map(keeper => 
            keeper._id === id ? { ...keeper, title: editObj.title, description: editObj.description } : keeper
        ));
        cancelEdit();
    };

    const chunkArray = (arr, chunkSize) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArr.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArr;
    };

    const chunkedKeepers = chunkArray(keeperList, 3);

    return (
        <div>
            {chunkedKeepers.map((row, index) => (
                <div className="showKeeper row" key={index}>
                    {row.map(keeper => (
                        <div className="keeperCard col-md-4" key={keeper._id}>
                            {editMode === keeper._id ? (
                                <div>
                                    <input
                                        className="inputBox"
                                        type="text"
                                        name="title"
                                        value={editObj.title}
                                        onChange={handleEditChange}
                                    />
                                    <textarea
                                        className="inputBox descriptionBox"
                                        name="description"
                                        value={editObj.description}
                                        onChange={handleEditChange}
                                    />
                                    <div className="editButtons">
                                        <FontAwesomeIcon icon={faCheck} className="saveIcon" onClick={() => saveEdit(keeper._id)} />
                                        <FontAwesomeIcon icon={faTimes} className="cancelIcon" onClick={cancelEdit} />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="title">
                                        {keeper.title}
                                        <div>
                                            <FontAwesomeIcon 
                                                icon={faEdit} 
                                                className="editIcon" 
                                                onClick={() => startEdit(keeper)} 
                                            />
                                            <FontAwesomeIcon 
                                                icon={faTrash} 
                                                className="deleteIcon" 
                                                onClick={() => deleteKeeper(keeper._id)} 
                                            />
                                        </div>
                                    </h1>
                                    <textarea
                                        className="descriptionBox"
                                        value={keeper.description}
                                        readOnly
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ShowKeeper;
