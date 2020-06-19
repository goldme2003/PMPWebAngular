import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {pgModel} from '../models/pgmodel';
import {Observable} from 'rxjs';
import {IttoCModel} from '../models/IttoCModel';

@Injectable({
  providedIn: 'root'
})
export class IttoCategService {

  private getittocservurl = "pmpweb/getallittocateg";
  private postittocservurl = "pmpweb/addittocateg";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'text'})
  };


  constructor(private http: HttpClient) { }

  addIttoCateg(newittoCategName: IttoCModel): Observable<IttoCModel> {

    const addnewittocurl = `${this.postittocservurl}?ittocname=${newittoCategName.ittoCName}&ittocdt=${newittoCategName.details}`;
    return this.http.post<IttoCModel>(addnewittocurl, newittoCategName, this.httpOptions);
  }

  getAllIttoCateg(): Observable<IttoCModel[]> {
    return this.http.get<IttoCModel[]>(this.getittocservurl);
  }
  /*TODO:
  *  update process group table function*/
}
