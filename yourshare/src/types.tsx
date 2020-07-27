export class Item implements Item {
    id: number;
    name: string;
    itemType: string;
    description: string;
       // <snip> :)
  
    constructor(itemId: number, the_name: string, the_itemType: string, desc: string, owner: Person) {
      this.id = itemId;
      this.name = the_name;
      this.itemType = the_itemType;
      this.description = desc;
      // <snip> :)
    }
  }

export class Person {
    id: number;
    name: string;
    // <snip> :)
    items: Array<Item>;
  
    constructor(personId: number, theName: string, ph: string, zip: string) {
      this.id = personId;
      this.name = theName;
           // <snip> :)
      this.items = new Array<Item>();
    }
    // addItem will create a new Item object and then add it to the end of the person's "items" array:
    addItem(the_id: number, the_name: string, the_itemType: string, desc: string): Item {
      const newItem = new Item(the_id, the_name, the_itemType, desc, this);
      this.items.push(newItem);
    }
  }

  export interface IYourShareState {
    // Declaring a "global" variable (idCounter) here so that we can issue sequential, increasing ID numbers to
    // Person and Item objects
    // May we need this, maybe we don't, but it's often useful for looking things up / saving to a file, etc
    idCounter: number,
    people: Array<Person>,
    currentUser: Person
  }
  
  export default IYourShareState;