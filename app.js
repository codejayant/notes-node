console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command : ', command);
console.log(process.argv);

if (command === 'add')	{
	console.log('Adding new note');
} else if (command === 'list')	{
	console.log('Listing all notes');
} else if (command === 'read')	{
	console.log('Read all notes');
} else if (command === 'remove') {
	console.log('Remove a note');
} else {
	console.log('command not found');
}