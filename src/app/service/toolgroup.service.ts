import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {pgModel} from '../models/pgmodel';
import {Observable} from 'rxjs';
import {tgModel} from '../models/TgModel';

@Injectable({
  providedIn: 'root'
})
export class ToolgroupService {

  private gettcservurl = "pmpweb/getalltc";
  private posttcservurl = "pmpweb/addtc";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };

  constructor(private http: HttpClient) { }

  addtc(newtcName: tgModel): Observable<tgModel> {

    const addnewtcurl = `${this.posttcservurl}?tcname=${newtcName.tcName}`;
    return this.http.post<tgModel>(addnewtcurl, newtcName, this.httpOptions);
  }

  getAllTc(): Observable<tgModel[]> {
    return this.http.get<tgModel[]>(this.gettcservurl);
  }
  /*TODO:
  *  update process group table function*/
}
