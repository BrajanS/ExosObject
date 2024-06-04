// ------------ // --------------- // -------------- //  A
let fruits = ['apple','banana','cherry']
console.log(fruits);

fruits.push('orange')
console.log(fruits);

fruits.shift();
console.log(fruits);
console.log('Longeur de fruits: ',fruits.length);

fruits.forEach(read => console.log('Foreach fruits:',read))

// ------------ // --------------- // -------------- //  B

let person = {firstName:'John',name:'Doe',age:30}
console.log(person);

person.city = "New York"
console.log(person);

person.age = 31;
console.log(person);

delete person[Object.keys(person)[0]];
console.log(person);

for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
}

// --------------- // -------------- // ------------- //  C

let people = [{name:'Aztec',age:14},{name:'Bobby',age:80},{name:'Jenny',age:20}]
console.log(people);

people.push({name:'David',age:40})
console.log(people);

console.log(people[1].age);

people.forEach(readNames => {
    console.log(readNames.name);
});
//----------------------------------------------------//