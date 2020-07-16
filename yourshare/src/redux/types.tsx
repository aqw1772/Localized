// State of the app

export interface IPreferences {
  text_me_when_someone_wants_to_borrow_an_item: boolean,
  allow_best_friends_to_borrow_without_approval: boolean,
  block_friends_of_friends_from_seeing_my_items: boolean
}

export class Prefs implements IPreferences {
  text_me_when_someone_wants_to_borrow_an_item: boolean;
  allow_best_friends_to_borrow_without_approval: boolean;
  block_friends_of_friends_from_seeing_my_items: boolean;

  constructor(text_me: boolean, borrow_ok: boolean, block_FoF: boolean) {
    this.text_me_when_someone_wants_to_borrow_an_item = text_me;
    this.allow_best_friends_to_borrow_without_approval = borrow_ok;
    this.block_friends_of_friends_from_seeing_my_items = block_FoF;
  }
}

export interface IPerson {
  id: number,
  name: string,
  preferences: IPreferences,
  bestFriends: Array<IPerson>,
  items: Array<IItem>
}
export class Person implements IPerson {
  id: number;
  name: string;
  preferences: IPreferences;
  bestFriends: Array<IPerson>;
  items: Array<IItem>;

  constructor(theId: number, theName: string) {
    this.id = theId;
    this.name = theName;
    this.preferences = new Prefs(false, false, false);
    this.bestFriends = new Array<IPerson>();
    this.items = new Array<IItem>();
  }
  addItem(the_id: number, the_name: string, the_itemType: string, desc: string): IItem {
    const newItem = new Item(the_id, the_name, the_itemType, desc, this);
    this.items.push(newItem);
    return newItem;
  }
}

export interface IItem {
  id: number,
  name: string,
  itemType: string,
  description: string,
  ownedBy: IPerson,
  lentTo: IPerson | undefined // undefined means that it's not lent to anybody right now
}
export class Item implements IItem {
  id: number;
  name: string;
  itemType: string;
  description: string;
  ownedBy: IPerson;
  lentTo = undefined;

  constructor(the_id: number, the_name: string, the_itemType: string, desc: string, owner: IPerson) {
    this.id = the_id;
    this.name = the_name;
    this.itemType = the_itemType;
    this.description = desc;
    this.ownedBy = owner;
  }
}

export interface IYourShareState {
  idCounter: number,
  people: Array<IPerson>,
  currentUser: IPerson
}

export default IYourShareState;

