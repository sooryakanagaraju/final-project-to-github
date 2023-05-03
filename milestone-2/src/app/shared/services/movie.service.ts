import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpOptions:any;
  public search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { 

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer "+sessionStorage.getItem("token")
        })
      }
    }
  public getProducts():Observable<any>{
  
    return this.http.get("http://localhost:4500/660/moviess",this.httpOptions);
  }

  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/660/moviess?type="+pattern,this.httpOptions);
  }

}
