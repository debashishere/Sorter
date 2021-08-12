import { Sorter } from "./Sorter";

import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 50])
const numSorter = new Sorter(numbersCollection)
numSorter.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XYaayb');
const stringSorter = new Sorter(charactersCollection)
stringSorter.sort()
console.log(charactersCollection.data)

const linklist = new LinkedList();
linklist.add(5);
linklist.add(7);
linklist.add(1);
linklist.add(0);
linklist.add(9);
const listSorter = new Sorter(linklist);
listSorter.sort();
linklist.print();