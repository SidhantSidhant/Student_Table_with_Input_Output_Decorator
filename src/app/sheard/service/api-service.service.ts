import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IstdList } from '../model/studentList';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jsonApi: string = environment.jsonApi;

  constructor(private _http: HttpClient) { }

  getStudentdata(): Observable<IstdList[]> {
    return this._http.get<IstdList[]>(this.jsonApi);
  }

  addnewStudentList(data : IstdList) : Observable<IstdList[]> {
    return this._http.post<IstdList[]>(this.jsonApi, data)
  }

  updateStudentList(body : IstdList, id : number) : Observable<IstdList[]>{
    let headers= new HttpHeaders({
      "content-type" : "application/json"
    })
    return this._http.patch<IstdList[]>(`${this.jsonApi}/${id}`, body)
  }
}
