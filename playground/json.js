var obj = {
	name: 'Jayant'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "jayant", "age": 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);