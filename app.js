console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

//fs.appendFile('greetings.txt', 'Hello World!', function(err)  {
//	if (err)	{
//		console.log('unable to write to file');
//	}
//});

//const user = os.userInfo();
//fs.appendFile('greetingsUser.txt', `Hello ${user.username}! You are ${notes.age}`);


//var res = notes.addNote();
//console.log(res);

console.log(`sum = ${notes.add(3, 6)}`);

console.log(_.isString(true));
console.log(_.isString('jayant'));

var filteredArray = _.uniq(['jayant', 1, 'jayant', 1, 2, 4]);
console.log(`filtered array = ${filteredArray}`);
