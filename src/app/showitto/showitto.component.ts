import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ProcIttoModel} from '../models/ProcIttoModel';
import {ProcToolModel} from '../models/ProcToolModel';
import {IttoCModel} from '../models/IttoCModel';
import {tgModel} from '../models/TgModel';
import {ProcessService} from '../service/process.service';
import {IttoCategService} from '../service/itto-categ.service';
import {IttoItemService} from '../service/itto-item.service';
import {ToolgroupService} from '../service/toolgroup.service';
import {ToolService} from '../service/tool.service';
import {ProcittoService} from '../service/procitto.service';
import {ProctoolService} from '../service/proctool.service';
import {pnModel} from '../models/pnmodel';
import {IttoModel} from '../models/IttoModel';
import {ToolModel} from '../models/ToolModel';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-showitto',
  templateUrl: './showitto.component.html',
  styleUrls: ['./showitto.component.css']
})
export class ShowittoComponent implements OnInit {
  ittopid;
  navigationSubscription;

  allpnitem: Array<pnModel>; //ALL Process Name list;
  allittoitem: Array<IttoModel>; // ALL ITTO items list in 10 Process Groups, including ITTO name and its belonged category;

  alltoolsitem: Array<ToolModel>; //ALL Tools items in 10 Process Groups;

  ittoiteminproc: Array<ProcIttoModel>; //ITTO items in ONE Process;
  toolinproc: Array<ProcToolModel>; //Tool items in ONE Process;
  allittocateg: Array<IttoCModel>; //ALL ITTO categaries items in 10 Process Groups;
  alltoolcateg: Array<tgModel>; //ALL tool categaries in 10 Process Groups;

  pageittocateg: Array<IttoCModel>; //used for front page to show ITTO categaries;
  pagetoolcateg: Array<tgModel>; //used for front page to show tool categaries;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private pnService: ProcessService, private ittoCategService: IttoCategService, private ittoItemService: IttoItemService,
              private toolgroupService: ToolgroupService, private toolService: ToolService, private procittoService: ProcittoService,
              private proctoolService: ProctoolService) {

    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.init();
      }
    });

  }

  init() {
    const routepidparam = +this.route.snapshot.paramMap.get('pid');
    this.ittopid = routepidparam;

    this.ittoiteminproc = new Array<ProcIttoModel>();
    this.toolinproc = new Array<ProcToolModel>();
    this.getProcItto(this.ittopid);
    this.getIttoCategOnPage();
    this.getToolCategOnPage(this.toolinproc);
    this.getProcTool(this.ittopid);
    this.showItto();


/*    this.ittoiteminproc = new Array<ProcIttoModel>();
    this.toolinproc = new Array<ProcToolModel>();*/
  }

  ngOnInit(): void {
    this.ittoiteminproc = new Array<ProcIttoModel>();
    this.toolinproc = new Array<ProcToolModel>();
    this.allpnitem = new Array<pnModel>();
    this.alltoolsitem = new Array<ToolModel>();
    this.allittocateg = new Array<IttoCModel>();
    this.allittoitem = new Array<IttoModel>();

    this.alltoolcateg = new Array<tgModel>();
    this.pagetoolcateg = new Array<tgModel>();
    this.pageittocateg = new Array<IttoCModel>();
    this.showAllpns();
    this.showItto();
    this.showtool();
    this.listTc();
    this.listIttoC();
    this.getProcItto(this.ittopid);
    this.getProcTool(this.ittopid);
    this.getIttoCategOnPage();
    this.getToolCategOnPage(this.toolinproc);


  }
/*
* function: get all Process name from DB as an array and put the array into local variable 'allpnitem';
* */
  showAllpns(): void {
    this.pnService.getAllPn()
      .subscribe(pnitems => this.allpnitem = pnitems);

  }
/*
* function: get all ITTO items from DB as an array and put the array into local variable 'allittoitem';
* */
  showItto(): void {
    this.ittoItemService.getAllItto()
      .subscribe(allittoitems => this.allittoitem = allittoitems);

  }
/*
* function: get all ITTO Categories from DB as an array and put the array into local variable 'allittoitem';
* */
  listIttoC(): void {
    this.ittoCategService.getAllIttoCateg()
      .subscribe(allittocitems => this.allittocateg = allittocitems);
  }
/*
* function: get all tool items from DB as an array;
* */
  showtool(): void {
    this.toolService.getAllTool()
      .subscribe(alltoolitems => this.alltoolsitem = alltoolitems);
  }
/*
* function: get all tool categories from DB as an array;
* */
  listTc(): void {
    this.toolgroupService.getAllTc()
      .subscribe(alltcitems => this.alltoolcateg = alltcitems);
  }
/*
* PARAM: 1. Process ID;
* function: check which ITTO items in ONE process;
* */
  getProcItto(pid: number): void {

    this.procittoService.getProcItto(pid)
      .subscribe(ioittoitems => this.ittoiteminproc = ioittoitems);
    console.log("get itto in process");
    // console.log(this.ittoiteminproc);
  }
/*
* PARAM: 1. Process ID;
* function: check which Tool items in ONE process;
* */
  getProcTool(pid: number): void {

    this.proctoolService.getProcTool(pid)
      .subscribe(ioittoitems => this.toolinproc = ioittoitems);
  }

  getIttoCategName(ittoiid: number): string {
    var tempittocateg: IttoCModel;
    // this.ittoCategService.getSingleItem(ittoiid)
    return tempittocateg.ittoCName;
  }
/*
* PARAM: 1. list that storing ITTO categories in ONE Process;
* function: show ITTO items' categories according to chosen Process, and save categories into list;
* */
  getIttoCategOnPage(): void {
    console.log("getIttoCategOnPage has been loaded");

    let tempittoid: IttoModel[] = [];
    let tempittocateg: IttoCModel[] = [];

    for (let i of this.ittoiteminproc) {
      let tempiid = i.ittoItemId;
      console.log(`temp is ${tempiid}`);
      // search itto INFO from 'allittoitem' list according to itto id in 'pittolist' ;
      for (let ittoi of this.allittoitem) {
        if (ittoi.ittoiId === tempiid) {
          let ittocategid = ittoi.belongedIttoItemCateg;
          for (let sittocateg of this.allittocateg){
            if (sittocateg.ittoCid == ittocategid) {
              tempittocateg.push(sittocateg);
            }
          }
        }
      }
    }
    console.log(tempittoid);
    console.log(tempittocateg);
  }
/*
* PARAM: 1. list that storing tool categories in ONE Process;
* function: show ITTO items' categories according to chosen Process, and save categories into list;
* */
  getToolCategOnPage(ptoollist: ProcToolModel[]): void {

  }



}
