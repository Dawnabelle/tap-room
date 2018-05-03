import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './../model/beer.model'

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent {

  masterBeerList: Beer [] = [
    new Beer('Beer1', 'Beer1 Imports', 5, 6.7),
    new Beer('HarryPot Beer', 'Broomstick Brewing', 5, 7.8),
    new Beer('Kalamazoom', 'Brew Right', 4, 5.4)
  ];

  sellPint(beer){
    beer.volume = beer.volume - 1;
  }

  lowPintWarning(beer) {
    if (beer.volume <= 10) {
      alert(`Warning, low on ${beer.name}`)
    } else if (beer.volume < 1) {
      alert(`We are out of ${beer.name}`)
    } else {
      console.log("I love beer")
    }
  }
}
