class Sorter {
  constructor( public collection: number[] | string ){
  }

  sort(): void {

    // dout
    const { length } = this.collection;

    for(let i =0; i < length; i++){
      for(let j=0; j < length-i-1; j++){
        
        // All of this only works if collection is number
        // if collection is an array of numbers
        // collection === number[]
        if(this.collection instanceof Array){
          if(this.collection[j] > this.collection[j+1]){
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = leftHand;
          }
        }

        // Only work if collection is string
        // if collection is an string do this logics instead
        // ~~logic ( for premitive value) to compare a string, do this logic instead~~
        if(typeof this.collection === 'string'){
          // collection === string
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort();
console.log(sorter.collection)