import { Component, OnInit } from '@angular/core';
import {AddksComponent} from '../addks/addks.component';
import {AddpgComponent} from '../addpg/addpg.component';
import {Ksmodel} from '../ksmodel';
import {pgModel} from '../models/pgmodel';
import {ProcessgroupService} from '../service/processgroup.service';
import {KsServiceService} from '../service/ks-service.service';
import {pnModel} from '../models/pnmodel';
import {ProcessService} from '../service/process.service';

@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.component.html',
  styleUrls: ['./addprocess.component.css']
})
export class AddprocessComponent implements OnInit {

  ksitem: Ksmodel[];
  pgitem: pgModel[];
  allpnitem: pnModel[];

  constructor(private pgService: ProcessgroupService, private ksService: KsServiceService, private pnService: ProcessService) { }

  ngOnInit(): void {
    this.listPg();
    this.listKs();
    this.showAllpns();
  }

  listPg(): void {
    this.pgService.getAllPg()
      .subscribe(allpgitems => this.pgitem = allpgitems);
  }

  listKs(): void {
    this.ksService.getAllKs()
      .subscribe(allksitems => this.ksitem = allksitems);
  }

  showAllpns(): void {
    this.pnService.getAllPn()
      .subscribe(pnitems => this.allpnitem = pnitems);

  }

  addNewpnName(newpnName: string, bpg: number, bks: number, detail: string): void {
    const tempnewpn: pnModel = {pId: 1, pName: newpnName, belongedProcessGroupId: bpg, belongedKnowledgeScopeId: bks, details: ""};
    this.pnService.addPn(tempnewpn)
      .subscribe(newItem => {
        this.allpnitem.push(newItem);
      });
  }

}
