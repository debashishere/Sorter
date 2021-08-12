import { Sorter } from "./Sorter";

import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 50])
const numSorter = new Sorter(numbersCollection)
numSorter.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XYaayb');
const stringSorter = new Sorter(charactersCollection)
stringSorter.sort()
console.log(charactersCollection.data)