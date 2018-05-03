import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './../model/beer.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {

  @Output() acceptBeer = new EventEmitter();

  addKeg(name, brand, price, alcoholContent) {
    event.preventDefault();
    let newBeer = new Beer(name, brand, price, alcoholContent);
    console.log(newBeer);
    this.acceptBeer.emit(newBeer);
  }

}
