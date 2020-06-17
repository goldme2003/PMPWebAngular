import { Component, OnInit } from '@angular/core';
import {AddksComponent} from '../addks/addks.component';
import {AddpgComponent} from '../addpg/addpg.component';
import {Ksmodel} from '../ksmodel';
import {pgModel} from '../models/pgmodel';
import {ProcessgroupService} from '../service/processgroup.service';
import {KsServiceService} from '../service/ks-service.service';

@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.component.html',
  styleUrls: ['./addprocess.component.css']
})
export class AddprocessComponent implements OnInit {

  ksitem: Ksmodel[];
  pgitem: pgModel[];

  constructor(private pgService: ProcessgroupService, private ksService: KsServiceService) { }

  ngOnInit(): void {
    this.listPg();
    this.listKs();
  }

  listPg(): void {
    this.pgService.getAllPg()
      .subscribe(allpgitems => this.pgitem = allpgitems);
  }

  listKs(): void {
    this.ksService.getAllKs()
      .subscribe(allksitems => this.ksitem = allksitems);
  }

}
