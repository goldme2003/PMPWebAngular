import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {pgModel} from '../models/pgmodel';
import {Observable} from 'rxjs';
import {ProcIttoModel} from '../models/ProcIttoModel';

@Injectable({
  providedIn: 'root'
})
export class ProcittoService {

  private addprocittoservurl = "pmpweb/addprocitto";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addProcItto(newprocItto: ProcIttoModel): Observable<ProcIttoModel> {

    const addnewprocittourl = `${this.addprocittoservurl}?pid=${newprocItto.belongedpid}&iid=${newprocItto.ittoid}&io=${newprocItto.io}`;
    return this.http.post<ProcIttoModel>(addnewprocittourl, newprocItto, this.httpOptions);
  }
}
