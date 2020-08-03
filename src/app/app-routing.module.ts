import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeaponsComponent} from './core/weapons/weapons.component';
import {MercsComponent} from './core/mercs/mercs.component';
import {AbilitiesComponent} from './core/abilities/abilities.component';

const appName = 'dirty-bomb-mercs';

const routes: Routes = [
  {path: `${appName}/`, redirectTo: '/mercs', pathMatch: 'full'},
  {path: `${appName}/mercs`, component: MercsComponent},
  {path: `${appName}/weapons/:mercId`, component: WeaponsComponent},
  {path: `${appName}/abilities/:mercId`, component: AbilitiesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
