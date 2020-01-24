import { User } from './user.model';
import { Item } from './item.model';
import { Status } from './status.model';

export class Cart {
    constructor(public id: number, public items: [Item, number],
                public seller: User, public status: Status) { }
}
