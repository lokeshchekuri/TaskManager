import React, { useState } from "react";
import "./addKeeper.css";

const AddKeeper = ({ setKeeperList }) => {
    const [keeperObj, setKeeperObj] = useState({
        title: "",
        description: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setKeeperObj({
            ...keeperObj,
            [name]: value
        });
    };

    const add = () => {
        if (keeperObj.title) {
            setKeeperList(prevList => [
                ...prevList,
                { ...keeperObj, _id: Date.now() }
            ]);
            setKeeperObj({
                title: "",
                description: ""
            });
        }
    };

    return (
        <div className="addKeeper">
            <h1>What is your next Task?</h1>
            <input
                className="inputBox titleInput"
                type="text"
                name="title"
                autoComplete="off"
                placeholder="Add Title"
                onChange={handleChange}
                value={keeperObj.title}
            />
            <textarea
                className="inputBox description"
                name="description"
                placeholder="Add Description Here"
                onChange={handleChange}
                value={keeperObj.description}
            />
            <div className="addButton" onClick={add}>Add</div>
        </div>
    );
};

export default AddKeeper;
