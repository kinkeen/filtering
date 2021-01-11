/*const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);*/


const animals = [
  {name : "Pixsi", species: "rabbit"},
  {name : "Sakira", species: "dog"},
  {name : "Sendi", species: "rabbit"},
  {name : "Testy", species: "dog"}
]

/*let dogs = animals.filter(function(aninmal){
  return aninmal.species === "dog";
});*/

const isDog = function(animals){
  return animals.species === "dog";
}
const dogs = animals.filter(isDog)
//const otherAnimals = animals.reject(isDog)

//console.log(dogs);
//console.log(otherAnimals);

const namesFilter = animals.filter(function (animal){
  return animal.name;
})
const nameMaps = animals.map(function (animal){
  return animal.name;
})

console.log(nameMaps);
console.log(namesFilter);