import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WeaponsComponent} from './core/weapons/weapons.component';
import {MercsComponent} from './core/mercs/mercs.component';

const routes: Routes = [
  {path: '', redirectTo: '/mercs', pathMatch: 'full'},
  {path: 'mercs', component: MercsComponent},
  {path: 'weapons/:mercId', component: WeaponsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
