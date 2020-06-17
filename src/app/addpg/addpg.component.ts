import { Component, OnInit } from '@angular/core';
import {Ksmodel} from '../ksmodel';

import {pgModel} from '../models/pgmodel';
import {ProcessgroupService} from '../service/processgroup.service';

@Component({
  selector: 'app-addpg',
  templateUrl: './addpg.component.html',
  styleUrls: ['./addpg.component.css']
})
export class AddpgComponent implements OnInit {

  allpgitems: pgModel[] = [
    /*    {id: 1, ksname: "测试知识领域"},
        {id: 2, ksname: "测试知识领域"}*/
  ];

  constructor(private pgService: ProcessgroupService) { }

  ngOnInit(): void {
    this.showAllPg();
  }

  addNewpgName(newpgName: string): void {
    const tempnewpg: pgModel = {pgId: 1, pgName: newpgName};
    this.pgService.addPg(tempnewpg)
      .subscribe(newItem => {
        this.allpgitems.push(newItem);
      });

  }
  showAllPg(): void {
    this.pgService.getAllPg()
      .subscribe(allpgitems => this.allpgitems = allpgitems);
  }
  /* TODO:
  *   update existed Knowledge scope*/


}
