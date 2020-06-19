import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {pnModel} from '../models/pnmodel';
import {ToolModel} from '../models/ToolModel';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private gettoolservurl = "pmpweb/getalltool";
  private posttoolservurl = "pmpweb/addtool";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };

  constructor(private http: HttpClient) { }

  getAllTool(): Observable<ToolModel[]> {
    return this.http.get<ToolModel[]>(this.gettoolservurl);
  }

  addTool(newtoolName: ToolModel): Observable<ToolModel> {

    const addnewtoolurl = `${this.posttoolservurl}?tname=${newtoolName.toolName}&btc=${newtoolName.belongedToolCateg}&dt=${newtoolName.details}`;
    return this.http.post<ToolModel>(addnewtoolurl, newtoolName, this.httpOptions);
  }
}
