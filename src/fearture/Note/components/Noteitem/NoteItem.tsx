import { NoteList } from "fearture/Note/Note";
import React from "react";
import "./NoteItem.scss";

const NoteItem = ({ value, title, day }: NoteList) => {
    return (
        <div className="note-item">
            {title !== "" && <h5>{title}</h5>}
            <span className="note-item__day">{day}</span>
            <span className="note-item__value">{value}</span>
        </div>
    );
};

export default NoteItem;
