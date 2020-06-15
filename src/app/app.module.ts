import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddksComponent } from './addks/addks.component';
import { ModiksComponent } from './modiks/modiks.component';
import { AddpgComponent } from './addpg/addpg.component';
import { ModipgComponent } from './modipg/modipg.component';
import { AddittoComponent } from './additto/additto.component';
import { ModiittoComponent } from './modiitto/modiitto.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddksComponent,
    ModiksComponent,
    AddpgComponent,
    ModipgComponent,
    AddittoComponent,
    ModiittoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
