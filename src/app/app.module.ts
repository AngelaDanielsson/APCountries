import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Ng för meta som decorators och tillför meta till angularmodule ex appmodule.
//och browser för for och browsers.....
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
//Importerar appcomonent och worldComponent (egna filer)

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //För att fungera i en webbrowser.
  declarations: [ AppComponent, WorldComponent ], //Komponent,Lägger till dec array
  providers: [],
  bootstrap:    [AppComponent] //root component
})
export class AppModule { }
//Appmodule = root module

