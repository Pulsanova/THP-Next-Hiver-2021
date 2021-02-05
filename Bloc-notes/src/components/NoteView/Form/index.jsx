import './index.scss';
import React from 'react';
import Button from 'components/Button';

const NoteViewForm = (props) => {
    const {
        noteData,
        onChange,
        onSubmit,
        onCancel,
        error,
    } = props;

    const emptyData = { title: '', text: '' };

    const { title, text } = noteData || emptyData;

    const isValid = title && text && title.length > 2 && text.length > 4;

    return (
        <form className="NoteViewForm" onSubmit={onSubmit}>
            <div className="NoteViewForm__field">
                <input
                    className="NoteViewForm__input"
                    type="text"
                    value={title}
                    onChange={(e) => { onChange('title', e.currentTarget.value); }}
                    placeholder="Entrez un titre..."
                />
            </div>
            <div className="NoteViewForm__field">
                <textarea
                    className="NoteViewForm__textarea"
                    value={text}
                    onChange={(e) => { onChange('text', e.currentTarget.value); }}
                    placeholder="... et le contenu de votre note."
                />
            </div>
            <div className="NoteViewForm__footer">
                {error && (
                    <p className="NoteViewForm__footer__error">{error}</p>
                )}
                <Button isSubmit disabled={!isValid}>Sauvegarder</Button>
                <Button onClick={onCancel}>Annuler / Fermer</Button>
            </div>
        </form>
    );
};

export default NoteViewForm;
