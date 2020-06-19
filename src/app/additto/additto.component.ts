import { Component, OnInit } from '@angular/core';
import {tgModel} from '../models/TgModel';
import {ToolModel} from '../models/ToolModel';
import {ToolgroupService} from '../service/toolgroup.service';
import {ToolService} from '../service/tool.service';
import {IttoCModel} from '../models/IttoCModel';
import {IttoModel} from '../models/IttoModel';
import {IttoCategService} from '../service/itto-categ.service';
import {IttoItemService} from '../service/itto-item.service';

@Component({
  selector: 'app-additto',
  templateUrl: './additto.component.html',
  styleUrls: ['./additto.component.css']
})
export class AddittoComponent implements OnInit {

  allittocategitem: IttoCModel[];
  allittoitem: IttoModel[];

  constructor(private ittoCategService: IttoCategService, private ittoItemService: IttoItemService) { }

  ngOnInit(): void {
    this.showItto();
    this.listIttoC();


  }

  showItto(): void {
    this.ittoItemService.getAllItto()
      .subscribe(allittoitems => this.allittoitem = allittoitems);
  }

  listIttoC(): void {
    this.ittoCategService.getAllIttoCateg()
      .subscribe(allittocitems => this.allittocategitem = allittocitems);
  }


  addNewItto(newitton: string, bittoc: number, ittodetails: string): void {
    const tempnewitton: IttoModel = {ittoiId: 1, ittoItemName: newitton, belongedIttoItemCateg: bittoc, details: ittodetails};
    this.ittoItemService. addItto(tempnewitton)
      .subscribe(newItem => {
        this.allittoitem.push(newItem);
      });
  }

}
