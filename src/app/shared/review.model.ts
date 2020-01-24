import { User } from './user.model';
import { Item } from './item.model';

export class Review {
    constructor(public id: number, public customer: User, public item: Item, public message: string) { }
}
