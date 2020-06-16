import { Component, OnInit } from '@angular/core';
import {Ksmodel} from '../ksmodel';
import {KsServiceService} from '../service/ks-service.service';

@Component({
  selector: 'app-addks',
  templateUrl: './addks.component.html',
  styleUrls: ['./addks.component.css']
})
export class AddksComponent implements OnInit {
  allksitems: Ksmodel[] = [
/*    {id: 1, ksname: "测试知识领域"},
    {id: 2, ksname: "测试知识领域"}*/
  ];

  constructor(private ksService: KsServiceService) { }

  ngOnInit(): void {
    this.showAllKs();
  }

  addNewksName(newksName: string): void {
    const tempnewks: Ksmodel = {ksId: 1, ksName: newksName};
    this.ksService.addKs(tempnewks)
      .subscribe(newItem => {
        this.allksitems.push(newItem);
      });

  }
  showAllKs(): void {
    this.ksService.getAllKs()
      .subscribe(allksitems => this.allksitems = allksitems);
  }

}
