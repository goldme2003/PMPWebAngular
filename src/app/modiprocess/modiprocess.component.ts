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

  constructor(private pnService: ProcessService, private ittoCategService: IttoCategService, private ittoItemService: IttoItemService, private toolgroupService: ToolgroupService, private toolService: ToolService) { }

  ngOnInit(): void {

    this.showAllpns();
    this.listIttoC();
    this.showtool();
    this.listTc();
    this.showItto();
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

}
