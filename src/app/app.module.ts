import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { Pagina2Component } from './componets/pagina2/pagina2.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { PagenoFoundComponent } from './componets/pageno-found/pageno-found.component';
import { EntradaComponent } from './componets/entrada/entrada.component';
import { MisproductosComponent } from './componets/misproductos/misproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina2Component,
    NavbarComponent,
    PagenoFoundComponent,
    EntradaComponent,
    MisproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
