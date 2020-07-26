import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MercCardComponent } from './shared/components/merc-card/merc-card.component';
import { MercDataGroupComponent } from './shared/components/merc-data-group/merc-data-group.component';
import { MercInfoPartComponent } from './shared/components/merc-info-part/merc-info-part.component';
import { MercInfoComponent } from './core/merc-info/merc-info.component';
import { MercDataItemComponent } from './shared/components/merc-data-item/merc-data-item.component';
import { WeaponListComponent } from './shared/components/weapon-list/weapon-list.component';
import { MercDataComponent } from './core/merc-data/merc-data.component';
import { MercViewerComponent } from './core/merc-viewer/merc-viewer.component';

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
    WeaponListComponent,
    MercDataComponent,
    MercViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
