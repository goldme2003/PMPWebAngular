import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {pgModel} from '../models/pgmodel';
import {pnModel} from '../models/pnmodel';
import {Ksmodel} from '../ksmodel';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private getpnservurl = "pmpweb/getallpn";
  private postpnservurl = "pmpweb/addpn";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };

  constructor(private http: HttpClient) { }

  getAllPn(): Observable<pnModel[]> {
    return this.http.get<pnModel[]>(this.getpnservurl);
  }

  addPn(newpnName: pnModel): Observable<pnModel> {

    const addnewpnurl = `${this.postpnservurl}?pnname=${newpnName.pName}&bks=${newpnName.belongedKnowledgeScopeId}&bpg=${newpnName.belongedProcessGroupId}&dt=${newpnName.details}`;
    return this.http.post<pnModel>(addnewpnurl, newpnName, this.httpOptions);
  }
}
