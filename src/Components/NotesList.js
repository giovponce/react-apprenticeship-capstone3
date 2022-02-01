import React from 'react';
import Note from '../Components/Note';

export default function NotesList({notes, onDelete, onArchive, onUnArchive, onEdit, showArchive}) {
  return (
    <>
        {notes.map((note) => (
            <Note
                key={note.id}
                id={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                onUnArchive={onUnArchive}
                onEdit={onEdit}
                showArchive={showArchive}
            />
        ))}
    </>
  )
}
