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
  private getprocittoservurl = "pmpweb/getallprocitto";


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addProcItto(newprocItto: ProcIttoModel): Observable<ProcIttoModel> {

    const addnewprocittourl = `${this.addprocittoservurl}?pid=${newprocItto.belongedPId}&iid=${newprocItto.ittoItemId}&io=${newprocItto.inOrout}`;
    return this.http.post<ProcIttoModel>(addnewprocittourl, newprocItto, this.httpOptions);
  }

  getProcItto(pid: number): Observable<ProcIttoModel[]> {

    const getallprocittourl = `${this.getprocittoservurl}?pid=${pid}`;
    return this.http.get<ProcIttoModel[]>(getallprocittourl);
  }


}
