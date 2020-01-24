import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-seller-item-list',
  templateUrl: './seller-item-list.component.html',
  styleUrls: ['./seller-item-list.component.css']
})
export class SellerItemListComponent implements OnInit {

  items: Item[] = [
    new Item(1, 'one', 11.1, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about one', new User(1, 'seller1', 'sellerpw1'), 'review1'),

    new Item(2, 'two', 22.2, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about two', new User(2, 'seller2', 'sellerpw2'), 'review2'),

    new Item(3, 'three', 33.3, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about three', new User(3, 'seller3', 'sellerpw3'), 'review3'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
