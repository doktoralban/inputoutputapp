import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutputapp';
  currentItem = 'Television';

  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];

 

  addItem(newItem: string) {
    // alert(newItem);
    this.items.push(newItem);

  }

  sEklenen: number =0  ;
  addEkle(sEklenen:number)
  {
    this.sEklenen = this.sEklenen + sEklenen  ;
    console.warn(`==>>> ${ this.sEklenen}.`);
  }

  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem(item: string) {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item: string) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }
}
