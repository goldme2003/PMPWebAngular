import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {pgModel} from '../models/pgmodel';
import {Observable} from 'rxjs';
import {IttoModel} from '../models/IttoModel';

@Injectable({
  providedIn: 'root'
})
export class IttoItemService {

  private getittoservurl = "pmpweb/getallitto";
  private postittoservurl = "pmpweb/additto";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addItto(newittoName: IttoModel): Observable<IttoModel> {

    const addnewittourl = `${this.postittoservurl}?itton=${newittoName.ittoItemName}&bittoc=${newittoName.belongedIttoItemCateg}&ittodt=${newittoName.details}`;
    return this.http.post<IttoModel>(addnewittourl, newittoName, this.httpOptions);
  }

  getAllItto(): Observable<IttoModel[]> {
    return this.http.get<IttoModel[]>(this.getittoservurl);
  }
  /*TODO:
  *  update process group table function*/
}
