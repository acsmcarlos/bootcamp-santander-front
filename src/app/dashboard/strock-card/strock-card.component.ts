import Stock from 'src/app/shared/model/stock-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strock-card',
  templateUrl: './strock-card.component.html',
  styleUrls: ['./strock-card.component.css']
})
export class StrockCardComponent implements OnInit {

  @Input()
  stock = new Stock();

  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string {
    const localizedVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-', '')}%`;
  }

}
