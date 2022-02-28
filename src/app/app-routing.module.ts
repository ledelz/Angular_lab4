import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PoidsComponent } from './poids/poids.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
 
  { path: 'poids', component: PoidsComponent },
  { path: 'temperature', component: TemperatureComponent },
 ];
 
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
