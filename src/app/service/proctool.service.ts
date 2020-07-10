import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProcIttoModel} from '../models/ProcIttoModel';
import {Observable} from 'rxjs';
import {ProcToolModel} from '../models/ProcToolModel';

@Injectable({
  providedIn: 'root'
})
export class ProctoolService {

  private addproctoolservurl = "pmpweb/addproctool";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addProcTool(newprocTool: ProcToolModel): Observable<ProcToolModel> {

    const addnewproctoolurl = `${this.addproctoolservurl}?pid=${newprocTool.belongedpid}&tid=${newprocTool.toolid}`;
    return this.http.post<ProcToolModel>(addnewproctoolurl, newprocTool, this.httpOptions);
  }
}
