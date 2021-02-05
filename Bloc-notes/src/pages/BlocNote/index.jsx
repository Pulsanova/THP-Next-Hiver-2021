import './index.scss';
import React from 'react';
import { v4 as generateUuid } from 'uuid';
import Config from 'config';
import NotesList from 'components/NotesList';
import Button from 'components/Button';
import NoteView from 'components/NoteView';

const emptyNote = { id: null, title: '', text: '' };

const BlocNote = ({ storedNotes }) => {
    const [notes, setNotes] = React.useState(storedNotes || []);
    const [selectedNote, setSelectedNote] = React.useState(null);

    const handleClickAddNote = () => {
        setSelectedNote(emptyNote);
    };

    const handleSelectNote = (note) => {
        setSelectedNote(note);
    };

    const handleSaveNote = (noteToSave) => {
        if (noteToSave.id) {
            setNotes(notes.map((note) => (
                (note.id === noteToSave.id) ? noteToSave : note
            )));
            return;
        }

        const newNote = { ...noteToSave, id: generateUuid() };
        setNotes((prevNotes) => [...prevNotes, newNote]);
        setSelectedNote(newNote);
    };

    const handleCancel = () => {
        setSelectedNote(null);
    };

    React.useEffect(() => {
        localStorage.setItem(Config.STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    return (
        <div className="BlocNote">
            <div className="BlocNote__nav">
                <div className="BlocNote__nav__actions">
                    <Button onClick={handleClickAddNote}>
                        Ajouter une note
                    </Button>
                </div>
                <p className="BlocNote__nav__count">
                    Il y a {notes.length} note{notes.length > 1 ? 's' : ''}
                </p>
                <NotesList
                    notes={notes}
                    onSelectNote={handleSelectNote}
                />
            </div>
            <NoteView
                selectedNote={selectedNote}
                notesCount={notes.length}
                onSaveNote={handleSaveNote}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default BlocNote;
