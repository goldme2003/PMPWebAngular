import { Component, OnInit } from '@angular/core';
import {pgModel} from '../models/pgmodel';
import {ProcessgroupService} from '../service/processgroup.service';
import {IttoCModel} from '../models/IttoCModel';
import {IttoCategService} from '../service/itto-categ.service';

@Component({
  selector: 'app-addittocateg',
  templateUrl: './addittocateg.component.html',
  styleUrls: ['./addittocateg.component.css']
})
export class AddittocategComponent implements OnInit {

  allittocitems: IttoCModel[] = [
    /*    {id: 1, ksname: "测试知识领域"},
        {id: 2, ksname: "测试知识领域"}*/
  ];

  constructor(private ittocService: IttoCategService) { }

  ngOnInit(): void {
    this.showAllIttoC();

  }

  addNewIttoC(newIttoCName: string, newIttoCdt: string): void {
    const tempnewittoc: IttoCModel = {ittoCid: 1, ittoCName: newIttoCName, details: newIttoCdt};
    this.ittocService.addIttoCateg(tempnewittoc)
      .subscribe(newItem => {
        this.allittocitems.push(newItem);
      });

  }
  showAllIttoC(): void {
    this.ittocService.getAllIttoCateg()
      .subscribe(ittocitem => this.allittocitems = ittocitem);
  }
  /* TODO:
  *   update existed Knowledge scope*/

}
