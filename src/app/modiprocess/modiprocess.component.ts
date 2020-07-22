import { Component, OnInit } from '@angular/core';
import {Ksmodel} from '../ksmodel';
import {pgModel} from '../models/pgmodel';
import {pnModel} from '../models/pnmodel';
import {ProcessgroupService} from '../service/processgroup.service';
import {KsServiceService} from '../service/ks-service.service';
import {ProcessService} from '../service/process.service';
import {IttoModel} from '../models/IttoModel';
import {IttoCModel} from '../models/IttoCModel';
import {ToolModel} from '../models/ToolModel';
import {tgModel} from '../models/TgModel';
import {IttoCategService} from '../service/itto-categ.service';
import {IttoItemService} from '../service/itto-item.service';
import {ToolgroupService} from '../service/toolgroup.service';
import {ToolService} from '../service/tool.service';
import {ProcittoService} from '../service/procitto.service';
import {ProctoolService} from '../service/proctool.service';
import {ProcIttoModel} from '../models/ProcIttoModel';
import {ProcToolModel} from '../models/ProcToolModel';

@Component({
  selector: 'app-modiprocess',
  templateUrl: './modiprocess.component.html',
  styleUrls: ['./modiprocess.component.css']
})
export class ModiprocessComponent implements OnInit {


  allpnitem: pnModel[];
  allittoitem: IttoModel[];
  allittoCitem: IttoCModel[];
  alltoolsitem: ToolModel[];
  alltoolCitem: tgModel[];
  allinIttoitem: ProcIttoModel[];
  alloutIttoItem: ProcIttoModel[];
  allProctoolitem: ProcToolModel[];
  cbcheckedgroup: Array<number>;
  toolcheckedgroup: Array<number>;
  outputcheckedgroup: Array<number>;
  inputcheckeditem: Array<number>;
  toolcheckeditem: Array<number>;
  outputcheckeditem: Array<number>;



  constructor(private pnService: ProcessService, private ittoCategService: IttoCategService, private ittoItemService: IttoItemService,
              private toolgroupService: ToolgroupService, private toolService: ToolService, private procittoService: ProcittoService,
              private proctoolService: ProctoolService) {
  }

  ngOnInit(): void {

    this.showAllpns();
    this.listIttoC();
    this.showtool();
    this.listTc();
    this.showItto();
    this.cbcheckedgroup = new Array<number>();
    this.toolcheckedgroup = new Array<number>();
    this.outputcheckedgroup = new Array<number>();
    this.inputcheckeditem = new Array<number>();
    this.toolcheckeditem = new Array<number>();
    this.outputcheckeditem = new Array<number>();
    this.allinIttoitem = [];
    this.allProctoolitem = [];
    this.alloutIttoItem = [];

  }


  showAllpns(): void {
    this.pnService.getAllPn()
      .subscribe(pnitems => this.allpnitem = pnitems);

  }

  showItto(): void {
    this.ittoItemService.getAllItto()
      .subscribe(allittoitems => this.allittoitem = allittoitems);
  }

  listIttoC(): void {
    this.ittoCategService.getAllIttoCateg()
      .subscribe(allittocitems => this.allittoCitem = allittocitems);
  }

  showtool(): void {
    this.toolService.getAllTool()
      .subscribe(alltoolitems => this.alltoolsitem = alltoolitems);
  }

  listTc(): void {
    this.toolgroupService.getAllTc()
      .subscribe(alltcitems => this.alltoolCitem = alltcitems);
  }

  /*
  * TODO:
  *  modify the ITTO items and tools for each process that needs to be modified;
  * */
  modiProcess(newpnName: string, bpg: number, bks: number, detail: string): void {
    const tempnewpn: pnModel = {pId: 1, pName: newpnName, belongedProcessGroupId: bpg, belongedKnowledgeScopeId: bks, details: ""};
    this.pnService.addPn(tempnewpn)
      .subscribe(newItem => {
        this.allpnitem.push(newItem);
      });
  }


  addAll(pid: number, inittolist: Array<number>, toollist: Array<number>, outittolist: Array<number>): void{
    for (let each of inittolist){
      const tempnewin: ProcIttoModel = {pittoId: 1, belongedPId: pid, ittoItemId: each, inOrout: 0};
      this.procittoService.addProcItto(tempnewin)
        .subscribe(newItem => {
          this.allinIttoitem.push(newItem);
          console.log(`process ${tempnewin.belongedPId}'s input itto item has been added`);
        });
    }
    for (let each of outittolist){
      const tempnewout: ProcIttoModel = {pittoId: 1, belongedPId: pid, ittoItemId: each, inOrout: 1};
      this.procittoService.addProcItto(tempnewout)
        .subscribe(newItem => {
          this.alloutIttoItem.push(newItem);
          console.log(`process ${tempnewout.belongedPId}'s output itto item has been added`);
        });
    }
    for (let each of toollist){
      const tempnewtool: ProcToolModel = {ptId: 1, belongedPId: pid, toolId: each};
      this.proctoolService.addProcTool(tempnewtool)
        .subscribe(newItem => {
          this.allProctoolitem.push(newItem);
          console.log(`process ${tempnewtool.belongedPId}'s tool item has been added`);
        });
    }
/*    this.ittoArraytoModel(pid, this.inputcheckeditem, this.allinIttoitem, 0);
    this.toolArraytoModel(pid, this.toolcheckeditem, this.allProctoolitem);
    this.ittoArraytoModel(pid, this.outputcheckeditem, this.alloutIttoItem, 1);

    this.addIttoItemTool(pid, this.allinIttoitem, this.allProctoolitem, this.alloutIttoItem);*/
  }


  checkedIttoCateg(ched: boolean, ittocid: number, showlist: Array<number>): void {
    /*    console.log(ched);
        console.log(ittocid);
        console.log(showlist);*/


    if (ched && !this.checkinList(ittocid, showlist)) {
      showlist.push(ittocid);

    } else{
      if (!ched){
        let i = showlist.indexOf(ittocid);
        showlist.splice(i, 1);
      }

    }
  }

  checkedIttoItem(ched: boolean, ittocid: number, showlist: Array<number>): void {
    /*    console.log(ched);
        console.log(ittocid);*/

    if (ched && !this.checkinList(ittocid, showlist)) {
      showlist.push(ittocid);

    } else{
      if (!ched){
        let i = showlist.indexOf(ittocid);
        showlist.splice(i, 1);
      }

    }
    console.log(showlist);
  }


  checkinList(i: number, chlist: Array<number>): boolean{

    return chlist.includes(i);
  }


}

