import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { Pagina2Component } from './componets/pagina2/pagina2.component';
import { PagenoFoundComponent } from './componets/pageno-found/pageno-found.component';
import { EntradaComponent } from './componets/entrada/entrada.component';
import { MisproductosComponent } from './componets/misproductos/misproductos.component';


const routes: Routes = [

  { path: '', redirectTo: "entrada", pathMatch:'full'},
  { path:'entrada', component:EntradaComponent},
  { path: 'sobreMi', component: HomeComponent},
  { path: 'pagina2', component: Pagina2Component},
  { path: 'pagina3', component: MisproductosComponent},
  { path: '**',  redirectTo: "entrada", pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
