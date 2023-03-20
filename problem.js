// const users = [
//   {
//     id: 2,
//     name: "Jonathon Haley",
//     username: "Monte.Weber2",
//     email: "Daphne43@yahoo.com",
//     phone: "1-563-675-1857 x11708",
//     website: "carmela.net",
//     password: "hashed_password",
//     ages: 34,
//   },
//   {
//     id: 3,
//     name: "Dean John",
//     username: "dd.1",
//     email: "deno@google.com",
//     phone: "1-123-543-1857 123212",
//     website: "dd.net",
//     password: "Dean_hashed_password",
//     ages: 23,
//   },
// ];

// console.log(users);
// temp = {
//   id: 4,
//   name: "Jonathon Haley",
//   username: "Monte.Weber2",
//   email: "Daphne43@yahoo.com",
//   phone: "1-563-675-1857 x11708",
//   website: "carmela.net",
//   password: "hashed_password",
//   ages: 34,
// };

//   Q1. Write a function to add a new record at the end of array users using spread operator,
//   functions : addLast(users,temp)

// const addLast = (users, temp) => {
//   users = [...users, temp];
//   console.log(users);
// };

// addLast(users, temp);

//Q2. Write a  function to add a new record at
// the begining of array users using spread operator,
// const addFirst = (users, temp) => {
//   users = [temp, ...users];
//   console.log(users);
// };
// addFirst(users, temp);

// Q3. Write a function to display all records
// only 3 fields id,name,username.
// functions : display(users)
// HINT : map

// const display = (users) => {
//   return users.map(({ id, name, username }) => ({ id, name, username }));
// };
// display(users);

// Q4. Write a  function which will display all
//records  with name ==='demon'
// function Name ---> findNameEquals(users)
// HINT : Use filter.
// function findNameEquals(users) {
//   var filter = "name";
//   var keyword = "Dean John";
//   var result = users.filter(function (item) {
//     return item.name == keyword;
//   });
//   console.log(result);
// }
// findNameEquals(users);

// Q5)Write a  function which will display all the
// records starting with name 'B' or any character
// passed as parameter.
// function Name ---> findSpecificStartChar(users,'B')
// HINT : Use filter and string functions.

// const findSpecificStartChar = (users, char) => {
//   var result = users.filter((member) => {
//     return member.name.startsWith(char);
//   });
//   console.log(result);
// };
// findSpecificStartChar(users, "J");

// Q6. Write a  function which will display sum of
//  all ages.
// function Name ---> findSumAges(users) .
// HINT : Use reduce functions.

// let age = users.map((a) => a.ages);
// const findSumAges = (allAges) => {
//   var sumAges = allAges.reduce((preVal, curVal) => preVal + curVal, 0);
//   console.log(sumAges);
// };
// findSumAges(age);

// Q7. Write a function to display sum of all ages of
// records having name starting with 'J'
// const sumOfSelectedRecord=(user, ch)=>{
//     let result = user.filter((member) => {
//       return member.name.startsWith(ch);
//     });
//     let age = result.map((i)=> i.ages);
//     let sumAges = age.reduce((preVal, currVal) => preVal + currVal, 0);
//     console.log(sumAges);
//   }

//   sumOfSelectedRecord(users, "J");
// Q8. Write a function which will display all the
// records in sorting according to names.
// function Name ---> Sorting(data,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING

// const Sorting = (arrayUser, orderby) => {
//   var result = arrayUser.sort((a, b) => {
//     let fa = a.name.toLowerCase(),
//       fb = b.name.toLowerCase();
//     if (orderby == "DESC") {
//       if (fb < fa) {
//         return -1;
//       }
//       if (fb > fa) {
//         return 1;
//       }
//       return 0;
//     } else {
//       if (fa < fb) {
//         return -1;
//       }
//       if (fa > fb) {
//         return 1;
//       }
//       return 0;
//     }
//   });
//displayData(result);

// Q9 Delete an object with specific array index.
// HINT : splice
// function : deleteRecord(users,1)
// 1 means delete object with index 1 in array

// const deleteRecord = (arrayUser, index) => {
//   arrayUser.splice(index);
//   console.log(arrayUser);
// };
// deleteRecord(users, 2);

// Q10. Insert an object at specific array index.
// HINT : splice
// function : InsertRecord(users,temp,1)
// 1 means inset object at index 1 in array.

// const InsertRecord = (arrayUser, temp, index) => [
//   ...users.splice(index, 0, temp),
//   newItem,
//   ...users.slice(index),
// ];
// const result = InsertRecord(index, 1, 10);
// console.log(result);

// const InsertRecord = (arrayUser, temp, index) => {
//   arrayUser.splice(index, 0, temp);
//   display(arrayUser);
// };
// const temp1 = {
//   id: 5,
//   name: "Jonathon Haley",
//   username: "Monte.Weber2",
//   email: "Daphne43@yahoo.com",
//   phone: "1-563-675-1857 x11708",
//   website: "carmela.net",
//   password: "hashed_password",
//   ages: 34,
// };

const persons = [
  {
    name: "Joe",

    animals: [
      {
        species: "dog",
        name: "Bolt",
        age: 23,
      },
      {
        species: "cat",
        name: "Billy",
        age: 24,
      },
    ],
  },
  {
    name: "Bob",
    animals: [
      {
        species: "dog",
        name: "Snoopy",
        age: 20,
      },
    ],
  },

  {
    name: "Slobby",
    animals: [
      {
        species: "cat",
        name: "Snoopy",
        age: 15,
      },
      {
        species: "turtle",
        name: "cappy",
        age: 15,
      },
      {
        species: "dog",
        name: "cappy",
        age: 10,
      },
    ],
  },
];

//Q11. Display only person names.
// const display = (persons) => {
//   persons.map((element) => {
//     console.log(element.name);
//   });
// };
// display(persons);

//Q12. Display only person animals list.
// const displayPersonAnimalList = (person) => {
//   let i = 0;
//   person.map((element) => {
//     console.log(++i + " )persons-" + element.name + " ");
//     let j = 0;
//     element.animals.map((animal) => {
//       console.log("\t" + ++j + ")Animal-" + animal.name + " ");
//     });
//   });
// };
// displayPersonAnimalList(persons);

//Q13. Display the total count of animals in person array.
// const animalsCount = (person) => {
//   let count = 0;
//   person.map((element) => {
//     element.animals.map((animal) => {
//       count++;
//     });
//   });
//   console.log(count);
// };
// animalsCount(persons);

// //Q14 )Display list of all animals.
// const displayListAnimals = (arrayPerson, petSpecies) => {
//   arrayPerson.map((element) => {
//     element.animals.map((animal) => {
//       console.log(animal.name);
//     });
//   });
// };
// displayListAnimals(persons);

//Q 15)display list of only dogs
// const DisplayListOfDog = (arrayPerson, petSpecies) => {
//   let i = 0;
//   console.log(petSpecies);
//   arrayPerson.map((element) => {
//     element.animals.filter((animal) => {
//       if (animal.species.toUpperCase() === petSpecies.toUpperCase()) {
//         console.log(++i + "\t" + animal.name + "\t\t" + animal.age);
//       }
//     });
//   });
// };
// DisplayListOfDog(persons, "dog");

//Q16 Display the record for species as dog and name as 'Snoopy'
// const displayRecordSpeciesAndName = (arrayPerson, petSpecies, petName) => {
//   let i = 0;
//   arrayPerson.map((element) => {
//     element.animals.filter((animal) => {
//       if (
//         animal.species.toUpperCase() === petSpecies.toUpperCase() &&
//         animal.name.toUpperCase() === petName.toUpperCase()
//       )
//         console.log(++i + "-" + animal.name + "-" + animal.age);
//     });
//   });
// };
// console.log("problem13");
// displayRecordSpeciesAndName(persons, "dog", "Snoopy");

//Q17 Display list of all dogs whose name starts with 'S'
// const displayRecordSpeciesAndName = (arrayPerson) => {
//   let i = 0;
//   arrayPerson.map((element) => {
//     element.animals.filter((animal) => {
//       if (
//         animal.species.toUpperCase() == "DOG" &&
//         animal.name.toUpperCase().charAt(0) == "S"
//       ) {
//         console.log(++i + "-" + animal.name + "-" + animal.age);
//       }
//     });
//   });
// };
// displayRecordSpeciesAndName(persons);

//Q18 Display sum of all ages of animals.
const sumOfAllAges = (arrayPerson, result, ages) => {
  let count = 0;
  arrayPerson.map((element) => {
    element.animals.filter((animal) => {
      count = count + animal.age;
    });
  });
  console.log(count);
};
sumOfAllAges(persons);

// Q19 Display sum of all ages of animals whose species is turtle.
const sumOfAllAnimal = (arrayPerson, petSpecies) => {
  let count = 0;
  let sum = 0;
  arrayPerson.map((element) => {
    element.animals.filter((animal) => {
      if (animal.species.toUpperCase() === "TURTLE") sum = sum + animal.age;
      count++;
    });
  });
  console.log(sum);
};
sumOfAllAnimal(persons);

//Q20 )Display list of all animals.
const displayListAnimals = (arrayPerson, petSpecies) => {
  arrayPerson.map((element) => {
    element.animals.map((animal) => {
      console.log(animal.name);
    });
  });
};
displayListAnimals(persons);
