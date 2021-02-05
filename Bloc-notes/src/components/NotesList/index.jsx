import './index.scss';
import React from 'react';
import NoteListItem from './Item';

const NotesList = ({ notes, onSelectNote }) => (
    <div className="NotesList">
        {notes.map((note) => (
            <NoteListItem
                key={note.id}
                note={note}
                onSelect={() => onSelectNote(note)}
            />
        ))}
    </div>
);

export default NotesList;
