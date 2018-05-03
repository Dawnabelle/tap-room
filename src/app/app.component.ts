import { Component } from '@angular/core';
import { BeerComponent } from './beer/beer.component';
import { Beer } from './model/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
