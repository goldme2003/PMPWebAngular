import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ksmodel} from '../ksmodel';
import {Observable} from 'rxjs';
import {pgModel} from '../models/pgmodel';

@Injectable({
  providedIn: 'root'
})
export class ProcessgroupService {

  private getpgservurl = "pmpweb/getallpg";
  private postpgservurl = "pmpweb/addpg"
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addPg(newpgName: pgModel): Observable<pgModel> {

    const addnewpgurl = `${this.postpgservurl}?pgname=${newpgName.pgName}`;
    return this.http.post<pgModel>(addnewpgurl, newpgName, this.httpOptions);
  }

  getAllPg(): Observable<pgModel[]> {
    return this.http.get<pgModel[]>(this.getpgservurl);
  }
  /*TODO:
  *  update process group table function*/
}
