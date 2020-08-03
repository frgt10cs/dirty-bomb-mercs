import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SafePipeModule} from 'safe-pipe';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {MercCardComponent} from './shared/components/merc-card/merc-card.component';
import {MercDataGroupComponent} from './shared/components/merc-data-group/merc-data-group.component';
import {MercInfoPartComponent} from './shared/components/merc-info-part/merc-info-part.component';
import {MercInfoComponent} from './core/merc-info/merc-info.component';
import {MercDataItemComponent} from './shared/components/merc-data-item/merc-data-item.component';
import {MercInfoWeaponListComponent} from './core/merc-info-weapon-list/merc-info-weapon-list.component';
import {MercGameDataComponent} from './core/merc-game-data/merc-game-data.component';
import {MercViewerComponent} from './core/merc-viewer/merc-viewer.component';
import {MercInfoAbilityListComponent} from './core/merc-info-ability-list/merc-info-ability-list.component';
import {WeaponsComponent} from './core/weapons/weapons.component';
import {MercsComponent} from './core/mercs/mercs.component';
import {AppRoutingModule} from './app-routing.module';
import {WeaponComponent} from './shared/components/weapon/weapon.component';
import {PageTitleComponent} from './shared/components/page-title/page-title.component';
import {MercWeaponListComponent} from './shared/components/merc-weapon-list/merc-weapon-list.component';
import {AbilitiesComponent} from './core/abilities/abilities.component';
import {AbilityComponent} from './shared/components/ability/ability.component';
import {MercListEditorComponent} from './shared/components/merc-list-editor/merc-list-editor.component';
import {MercListComponent} from './shared/components/merc-list/merc-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MercCardComponent,
    MercDataGroupComponent,
    MercInfoPartComponent,
    MercInfoComponent,
    MercDataItemComponent,
    MercInfoWeaponListComponent,
    MercGameDataComponent,
    MercViewerComponent,
    MercInfoAbilityListComponent,
    WeaponsComponent,
    MercsComponent,
    WeaponComponent,
    PageTitleComponent,
    MercWeaponListComponent,
    AbilitiesComponent,
    AbilityComponent,
    MercListEditorComponent,
    MercListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
