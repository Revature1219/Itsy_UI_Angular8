import { User } from './user.model';
import { Review } from './review.model';

export class Seller extends User {
    public reviews: Array<Review>;
}
