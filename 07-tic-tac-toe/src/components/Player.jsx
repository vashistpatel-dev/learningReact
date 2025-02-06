import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() { // start fucntion name with handle when it is triggered upon an event
        // setIsEditing(isEditing ? false : true); // can do it like this: !isEditing, but shouldnt due to asynchronous updating of states
        // setIsEditing((editing) => !editing);
        setIsEditing(editing => !editing);
    }

    function handleChange(event) { //we want to listen to the change event here
        // console.log(event)
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button> {/* passing fucntion as a value */}
        </li>
    )
}