import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListproduitsComponent } from './application/listproduits/listproduits.component';
import { AddproduitComponent } from './application/addproduit/addproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListproduitsComponent,
    AddproduitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
