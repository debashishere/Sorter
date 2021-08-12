

import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Sort Array of numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 50])
numbersCollection.sort();
console.log(numbersCollection.data)

// Sort String
const charactersCollection = new CharactersCollection('XYaayb');
charactersCollection.sort()
console.log(charactersCollection.data)

// Sort a link list 

const linklist = new LinkedList();
linklist.add(5);
linklist.add(7);
linklist.add(1);
linklist.add(0);
linklist.add(9);

linklist.sort();
linklist.print();