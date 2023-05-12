import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  httpOptions:any;

  constructor(private http:HttpClient) { 

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer "+sessionStorage.getItem("token")
        })
      }
    }
  public getUserlist(pattern:string):Observable<any>{
  
    return this.http.get("http://localhost:4500/660/users?type="+pattern,this.httpOptions);
  }

  updateuserlist(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:4500/users/${id}`, data,this.httpOptions);
  }


  deleteuser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4500/users/${id}`);
  }

  
addUser(data: any): Observable<any> {
  return this.http.post('http://localhost:4500/reviews', data,this.httpOptions);
}

 /*  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/660/moviess?type="+pattern,this.httpOptions);
  } */

}
