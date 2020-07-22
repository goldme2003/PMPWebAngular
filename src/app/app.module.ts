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
import { AddtoolComponent } from './addtool/addtool.component';
import { ModitoolComponent } from './moditool/moditool.component';
import { AddtgComponent } from './addtg/addtg.component';
import { AddprocessComponent } from './addprocess/addprocess.component';
import { ModiprocessComponent } from './modiprocess/modiprocess.component';
import {HttpClientModule} from '@angular/common/http';
import { AddittocategComponent } from './addittocateg/addittocateg.component';
import { ShowittoComponent } from './showitto/showitto.component';

@NgModule({
  declarations: [
    AppComponent,
    AddksComponent,
    ModiksComponent,
    AddpgComponent,
    ModipgComponent,
    AddittoComponent,
    ModiittoComponent,
    AddtoolComponent,
    ModitoolComponent,
    AddtgComponent,
    AddprocessComponent,
    ModiprocessComponent,
    AddittocategComponent,
    ShowittoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
