import { Injectable } from '@angular/core';
import {Ksmodel} from '../ksmodel';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KsServiceService {
  private getksservurl = "pmpweb/getallks";
  private postksservurl = "pmpweb/addks"
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addKs(newksName: Ksmodel): Observable<Ksmodel> {

    const addnewksurl = `${this.postksservurl}?ksname=${newksName.ksName}`;
    return this.http.post<Ksmodel>(addnewksurl, newksName, this.httpOptions);
  }

  getAllKs(): Observable<Ksmodel[]> {
    return this.http.get<Ksmodel[]>(this.getksservurl);
  }
  /*TODO:
  *  update Knowledge scope table function*/
}
