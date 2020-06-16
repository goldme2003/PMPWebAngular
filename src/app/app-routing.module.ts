import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddksComponent } from './addks/addks.component';
import { ModiksComponent } from './modiks/modiks.component';
import { AddpgComponent } from './addpg/addpg.component';
import { ModipgComponent } from './modipg/modipg.component';
import { AddittoComponent } from './additto/additto.component';
import { ModiittoComponent } from './modiitto/modiitto.component';
import {AddtoolComponent} from './addtool/addtool.component';
import {ModitoolComponent} from './moditool/moditool.component';
import {AddtgComponent} from './addtg/addtg.component';
import {AddprocessComponent} from './addprocess/addprocess.component';
import {ModiprocessComponent} from './modiprocess/modiprocess.component';


const routes: Routes = [
  {path: 'addks', component: AddksComponent},
  {path: 'modiks', component: ModiksComponent},
  {path: 'addpg', component: AddpgComponent},
  {path: 'modipg', component: ModipgComponent},
  {path: 'additto', component: AddittoComponent},
  {path: 'modiitto', component: ModiittoComponent},
  {path: 'addtool', component: AddtoolComponent},
  {path: 'moditool', component: ModitoolComponent},
  {path: 'addtg', component: AddtgComponent},
  {path: 'addprocess', component: AddprocessComponent},
  {path: 'modiprocess', component: ModiprocessComponent},


];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
