import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHeaderComponent } from './seller/seller-header/seller-header.component';
import { SellerItemListComponent } from './seller/seller-item-list/seller-item-list.component';
import { SellerAddItemComponent } from './seller/seller-item-list/seller-add-item/seller-add-item.component';
import { SellerItemCardComponent } from './seller/seller-item-list/seller-item-card/seller-item-card.component';
import { SellerPendingOrderComponent } from './seller/seller-pending-order/seller-pending-order.component';
import { SellerTransactionHistoryComponent } from './seller/seller-transaction-history/seller-transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    SellerHeaderComponent,
    SellerItemListComponent,
    SellerAddItemComponent,
    SellerItemCardComponent,
    SellerPendingOrderComponent,
    SellerTransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
