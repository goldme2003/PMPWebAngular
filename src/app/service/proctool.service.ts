import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProcIttoModel} from '../models/ProcIttoModel';
import {Observable} from 'rxjs';
import {ProcToolModel} from '../models/ProcToolModel';
import {pgModel} from '../models/pgmodel';

@Injectable({
  providedIn: 'root'
})
export class ProctoolService {

  private addproctoolservurl = "pmpweb/addproctool";
  private getproctoolservurl = "pmpweb/getallproctool";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addProcTool(newprocTool: ProcToolModel): Observable<ProcToolModel> {

    const addnewproctoolurl = `${this.addproctoolservurl}?pid=${newprocTool.belongedPId}&tid=${newprocTool.toolId}`;
    return this.http.post<ProcToolModel>(addnewproctoolurl, newprocTool, this.httpOptions);
  }
  getProcTool(pid: number): Observable<ProcToolModel[]> {

    const getallproctoolurl = `${this.getproctoolservurl}?pid=${pid}`;
    return this.http.get<ProcToolModel[]>(getallproctoolurl);
  }
}
