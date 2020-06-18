import { Component, OnInit } from '@angular/core';
import {pgModel} from '../models/pgmodel';
import {ProcessgroupService} from '../service/processgroup.service';
import {ToolgroupService} from '../service/toolgroup.service';
import {tgModel} from '../models/TgModel';

@Component({
  selector: 'app-addtg',
  templateUrl: './addtg.component.html',
  styleUrls: ['./addtg.component.css']
})
export class AddtgComponent implements OnInit {



  alltcitems: tgModel[] = [
    /*    {id: 1, ksname: "测试知识领域"},
        {id: 2, ksname: "测试知识领域"}*/
  ];

  constructor(private tcService: ToolgroupService) { }

  ngOnInit(): void {
    this.showAllTc();
  }

  addNewTcName(newtcName: string): void {
    const tempnewtc: tgModel = {tcId: 1, tcName: newtcName};
    this.tcService.addtc(tempnewtc)
      .subscribe(newItem => {
        this.alltcitems.push(newItem);
      });

  }
  showAllTc(): void {
    this.tcService.getAllTc()
      .subscribe(alltcitems => this.alltcitems = alltcitems);
  }

}
