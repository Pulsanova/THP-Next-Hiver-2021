import './index.scss';
import React from 'react';
import Display from 'components/NoteView/Display';
import Form from 'components/NoteView/Form';

const NoteView = (props) => {
    const {
        selectedNote,
        notesCount,
        onSaveNote,
        onCancel,
    } = props;

    const [currentNote, setCurrentNote] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setCurrentNote(selectedNote);
    }, [selectedNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, text } = currentNote;
        if (!title || !text) {
            setError('La note est incomplète. Veuillez renseigner un titre et un contenu.');
            return;
        }

        setError(null);

        const note = { id: selectedNote?.id || null, title, text };
        onSaveNote(note);
    };

    const handleChange = (fieldName, value) => {
        if (fieldName === 'title') {
            setCurrentNote({ ...currentNote, title: value });
        } else if (fieldName === 'text') {
            setCurrentNote({ ...currentNote, text: value });
        }
    };

    return (
        <div className="NoteView">
            {!selectedNote && notesCount === 0 && (
                <p className="NoteView__message">Créez une nouvelle note en utilisant le bouton ci-contre.</p>
            )}
            {!selectedNote && notesCount > 0 && (
                <p className="NoteView__message">Sélectionnez une note ci-contre, ou créez en une nouvelle.</p>
            )}
            {selectedNote && (
                <div className="NoteView__content">
                    <Display note={currentNote} />
                    <Form
                        noteData={currentNote}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onCancel={onCancel}
                        error={error}
                    />
                </div>
            )}
        </div>
    );
};

export default NoteView;
