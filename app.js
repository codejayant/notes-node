console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;

var command = argv._[0];
console.log('Command : ', command);
console.log('Process : ', process.argv);
console.log('yargs : ', argv);

if (command === 'add')	{
	console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
} else if (command === 'list')	{
	console.log('Listing all notes');
	notes.getAll();
} else if (command === 'read')	{
	console.log('Read all notes');
	notes.readNote(argv.title);
} else if (command === 'remove') {
	console.log('Remove a note');
	notes.removeNote(argv.title);
} else {
	console.log('command not found');
}