import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AddksComponent } from './addks/addks.component';
import { ModiksComponent } from './modiks/modiks.component';
import { AddpgComponent } from './addpg/addpg.component';
import { ModipgComponent } from './modipg/modipg.component';
import { AddittoComponent } from './additto/additto.component';
import { ModiittoComponent } from './modiitto/modiitto.component';


const routes: Routes = [
  {path: 'addks', component: AddksComponent},
  {path: 'modiks', component: ModiksComponent},
  {path: 'addpg', component: AddpgComponent},
  {path: 'modipg', component: ModipgComponent},
  {path: 'additto', component: AddittoComponent},
  {path: 'modiitto', component: ModiittoComponent},
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
