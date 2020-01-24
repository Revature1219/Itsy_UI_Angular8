import { User } from './user.model';
import { Review } from './review.model';

export class Item {
    // constructor(public id: number, public name: string, public price: number, public image: string,
    //             public details: string, public seller: User, public reviews: Array<Review>) { }
    constructor(public id: number, public name: string, public price: number, public image: string,
                public details: string, public seller: User, public reviews: string) { }
}
