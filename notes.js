console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,		//es6 syntax since key and value are same
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};


var getAll = () => {
    console.log('Getting all notes');
    return fetchNotes();
};

var readNote = (title) => {
    console.log("Reading note : ", title);
    var notes = fetchNotes();
    var specifiedNote = notes.filter((note) => note.title === title);
    return specifiedNote[0];
};

var removeNote = (title) => {
    console.log(`Removing note : ${title}`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--------');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};