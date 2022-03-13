import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "./Note.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { closeIcon, delNote, newNote, noteLine, notesIcon } from "assets/icons";
import NoteItem from "./components/Noteitem/NoteItem";
import capital from "utils/capitalLetter";
import { useAppDispatch, useAppSelector } from "App/store";
import { selectModeStatus } from "components/Navbar/themeSlice";
import { themeAction } from "../../components/Navbar/themeSlice";
interface NoteProps {}
export interface NoteList {
    title?: string;
    value?: string;
    day: string;
}
const Note = () => {
    const [data, setData] = useState<any>("");
    const [noteList, setNoteList] = useState<NoteList[]>([]);
    const [title, setTitle] = useState<string>("");
    const dispatch = useAppDispatch();
    const modeStatus = useAppSelector(selectModeStatus);
    const getDay = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return { day, month, year };
    };
    const [currentTime, setCurrentTime] = useState<string>(() => {
        const newDay = getDay();
        return `${newDay.day}/${newDay.year}/${newDay.month}`;
    });
    const getCurrentDay = (day: number, year: number, month: number) => {
        const newMonth = month < 10 ? `0${month}` : month;
        setCurrentTime(`${day}/${year}/${newMonth}`);
    };

    useEffect(() => {
        let timer = setInterval(() => {
            const newDay = getDay();
            getCurrentDay(newDay.day, newDay.month + 1, newDay.year);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleData = (newData: any) => {
        if (!newData) return;
        const value = newData.blocks[0].text;
        console.log(newData);
        setData(value);
    };
    const handleSave = () => {
        setNoteList((prev = []) => [...prev, { value: data, day: currentTime, title: capital(title) || "" }]);
    };
    return (
        <Draggable handle=".handle">
            <div className="note">
                <img
                    src={closeIcon}
                    alt=""
                    onClick={() =>
                        dispatch(
                            themeAction.setModeStatus({
                                ...modeStatus,
                                note: false,
                            })
                        )
                    }
                />
                <div className="note__container">
                    <div className="note__list">
                        <div className="note__logo handle">
                            <h3>Notes</h3>
                            <img src={noteLine} alt="" />
                        </div>
                        <div className="note__items">
                            {noteList !== null &&
                                noteList.map((note, i) => (
                                    <NoteItem value={note.value} day={note.day} title={note.title} key={i} />
                                ))}
                        </div>
                    </div>
                    <div className="note__edit">
                        <div className="note__edit-title">
                            <img src={newNote} alt="" />
                            <img src={delNote} alt="" />
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Add title here..."
                            />
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
