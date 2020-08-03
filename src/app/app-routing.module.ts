import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeaponsComponent} from './core/weapons/weapons.component';
import {MercsComponent} from './core/mercs/mercs.component';
import {AbilitiesComponent} from './core/abilities/abilities.component';

const appName = 'dirty-bomb-mercs';

const routes: Routes = [
  {path: ``, redirectTo: `/mercs`, pathMatch: 'full'},
  {path: `mercs`, component: MercsComponent},
  {path: `weapons/:mercId`, component: WeaponsComponent},
  {path: `abilities/:mercId`, component: AbilitiesComponent}
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
