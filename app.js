console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
        demand: true,
        alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];
console.log('Command : ', command);
// console.log('Process : ', process.argv);
console.log('yargs : ', argv);

if (command === 'add') {
    console.log('Adding new note');
    // node app.js add --title=secret --body="some body here"
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('note not created');
    }
} else if (command === 'list') {
    console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    console.log('Read all notes');
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    console.log('Remove a note');
    var isNoteRemoved = notes.removeNote(argv.title);
    var message = isNoteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('command not found');
}