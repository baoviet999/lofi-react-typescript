import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "./Note.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { delNote, newNote, noteLine, notesIcon } from "assets/icons";
import NoteItem from "./components/Noteitem/NoteItem";
import capital from "utils/capitalLetter";
interface NoteProps {}
export interface NoteList {
    title?: string;
    value: string;
    day: string;
}
const Note = () => {
    const [data, setData] = useState<any>({});
    const [noteList, setNoteList] = useState<NoteList[]>([]);
    const [title, setTitle] = useState<string>('')

    const handleData = (newData: any) => {
        if (!newData) return
        const value = newData.blocks[0].text;
        setData(value);
    };
    const handleSave = () => {
        setNoteList((prev) => [...prev, { value: data, day: "12/2/2022", title : capital(title) || '' }]);
    };
    return (
        <Draggable handle=".handle">
            <div className="note">
                <div className="note__container">
                    <div className="note__list">
                        <div className="note__logo handle">
                            <h3>Notes</h3>
                            <img src={noteLine} alt="" />
                        </div>
                        <div className="note__items">
                            {noteList.map((note, i) => (
                                <NoteItem value={note.value} day={note.day} title={note.title} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="note__edit">
                        <div className="note__edit-title">
                            <img src={newNote} alt="" />
                            <img src={delNote} alt="" />
                            <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Add title here..." />
                        </div>
                        <Editor
                            toolbarClassName="note__toolbar"
                            wrapperClassName="note__wrapper"
                            editorClassName="note__editor"
                            onContentStateChange={handleData}
                        />
                        <div className="note__edit-btn" onClick={handleSave}>
                            Save
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Note;
