import { Component } from '@angular/core';
import { BeerComponent } from './beer/beer.component';
import { Beer } from './model/beer.model';
import { AddKegComponent } from './add-keg/add-keg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  masterBeerList: Beer [] = [
    new Beer('Beer1', 'Beer1 Imports', 5, 6.7),
    new Beer('HarryPot Beer', 'Broomstick Brewing', 5, 7.8),
    new Beer('Kalamazoom', 'Brew Right', 4, 5.4)
  ];

  addNewKeg(newBeer) {
    this.masterBeerList.push(newBeer);
    console.log(this.masterBeerList);
  }
}
