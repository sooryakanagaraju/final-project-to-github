import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpOptions:any;
  releasedYears: number[] = [];
  public search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { 

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer "+sessionStorage.getItem("token")
        })
      }
    }
  public getMovies():Observable<any>{
  
    return this.http.get("http://localhost:4500/moviess",this.httpOptions);
  }

  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/660/moviess?type="+pattern,this.httpOptions);
  }

  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500//details//"+id,this.httpOptions)
  }

  getMoviesById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500//moviess//"+id,this.httpOptions)
  }

  addMovie(data: any): Observable<any> {
    return this.http.post('http://localhost:4500/moviess', data,this.httpOptions);
  }

  updateMovie(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:4500/moviess/${id}`, data,this.httpOptions);
  }

  getMovieList(): Observable<any> {
    return this.http.get('http://localhost:4500/moviess',this.httpOptions);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4500/moviess/${id}`);
  }

  
}

