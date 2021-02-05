import './index.scss';
import React from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter();

const NoteViewDisplay = ({ note }) => (
    <div className="NoteViewDisplay">
        <h2 className="NoteViewDisplay__title">
            {note?.title || '(nouvelle note)'}
        </h2>
        <div
            className="NoteViewDisplay__text"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(note?.text) }}
        />
    </div>
);

export default NoteViewDisplay;
