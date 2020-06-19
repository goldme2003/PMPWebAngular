import { Component, OnInit } from '@angular/core';
import {tgModel} from '../models/TgModel';
import {ToolModel} from '../models/ToolModel';
import {ToolgroupService} from '../service/toolgroup.service';
import {ToolService} from '../service/tool.service';

@Component({
  selector: 'app-addtool',
  templateUrl: './addtool.component.html',
  styleUrls: ['./addtool.component.css']
})
export class AddtoolComponent implements OnInit {

  alltcitem: tgModel[];
  alltoolitem: ToolModel[];

  constructor(private tcService: ToolgroupService, private toolService: ToolService) { }

  ngOnInit(): void {
    this.showtool();
    this.listTc();

  }

  showtool(): void {
    this.toolService.getAllTool()
      .subscribe(alltoolitems => this.alltoolitem = alltoolitems);
  }

  listTc(): void {
    this.tcService.getAllTc()
      .subscribe(alltcitems => this.alltcitem = alltcitems);
  }


  addNewtoolName(newtoolName: string, btc: number, details: string): void {
    const tempnewtool: ToolModel = {tId: 1, toolName: newtoolName, belongedToolCateg: btc, details: details};
    this.toolService.addTool(tempnewtool)
      .subscribe(newItem => {
        this.alltoolitem.push(newItem);
      });
  }

}
