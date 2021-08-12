export class CharactersCollection {
  constructor( public data: string){};


  get length(): number{
    return this.data.length
  };

  compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    // spit string into characters
    const characters = this.data.split('');
    // swap
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    // update data with new string
    this.data = characters.join('')
  }

}