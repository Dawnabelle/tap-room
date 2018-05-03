import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    AddKegComponent,
    EditKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
