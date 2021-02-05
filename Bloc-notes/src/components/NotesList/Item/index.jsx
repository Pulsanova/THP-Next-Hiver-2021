import './index.scss';
import React from 'react';

const NoteListItem = ({ note, onSelect }) => {
    const { id, title, text } = note;
    const safeText = text.replace(/(#|\*|\[|\])+/gm, '');
    const shortText = safeText.substr(0, 60);

    return (
        <button type="button" className="NoteListItem" onClick={onSelect}>
            <h3 className="NoteListItem__title">{title}</h3>
            <p className="NoteListItem__text">
                {shortText}{safeText.length > shortText.length && '...'}
            </p>
            <p className="NoteListItem__id">#{id}</p>
        </button>
    );
};

export default NoteListItem;
