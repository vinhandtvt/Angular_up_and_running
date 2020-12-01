import { Stock } from '../../model/stock';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }


  toggleFavorite(event: any): void {
    console.log('We are toggling the favorite stae for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
