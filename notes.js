console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,		//es6 syntax since key and value are same
		body
	};

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }
	
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0)   {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
	
};


var getAll = () => {
	console.log('Getting all notes');
};

var readNote = (title) => {
	console.log("Reading note : ", title);
};

var removeNote = (title) => {
	console.log(`Removing note : ${title}`);
};

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
};