import { Component, Input } from '@angular/core';
import { Beer } from './../model/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent {

  @Input() childBeerList: Beer[];

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
