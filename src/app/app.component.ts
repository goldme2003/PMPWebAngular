import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {KsServiceService} from './service/ks-service.service';
import {Ksmodel} from './ksmodel';
import {pnModel} from './models/pnmodel';
import {pgModel} from './models/pgmodel';
import {ProcessgroupService} from './service/processgroup.service';
import {ProcessService} from './service/process.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PMPWeb';

  allksitems: Ksmodel[];
  allpnitems: pnModel[];
  allpgitems: pgModel[];

  constructor(private pgService: ProcessgroupService, private ksService: KsServiceService, private pnService: ProcessService) { }


  ngOnInit(): void {
    this.listPg();
    this.listKs();
    this.showAllpns();
  }

  listPg(): void {
    this.pgService.getAllPg()
      .subscribe(allpgitems => this.allpgitems = allpgitems);
  }

  listKs(): void {
    this.ksService.getAllKs()
      .subscribe(allksitems => this.allksitems = allksitems);
  }

  showAllpns(): void {
    this.pnService.getAllPn()
      .subscribe(pnitems => this.allpnitems = pnitems);

  }
}
