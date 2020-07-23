import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MercCardComponent } from './shared/components/merc-card/merc-card.component';
import { MercEditorComponent } from './core/merc-editor/merc-editor.component';
import { MercDataGroupComponent } from './shared/components/merc-data-group/merc-data-group.component';

@NgModule({
  declarations: [
    AppComponent,  
    HeaderComponent,
    FooterComponent,
    MercCardComponent,
    MercEditorComponent,
    MercDataGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
