import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviereviewService {
  httpOptions:any;
  constructor(private http:HttpClient) { }


  getReviews():Observable<any> {
    return this.http.get("http://localhost:4500/reviews",this.httpOptions)
  }
  postReview(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })

  return this.http.post("http://localhost:4500/reviews",obj,this.httpOptions);
 }

 deleteReview(id:number):Observable<any>{
  return this.http.delete(`http://localhost:4500/reviews/${id}`)
 }

 updateReview(id: number, data: any): Observable<any> {
  return this.http.put(`http://localhost:4500/reviews/${id}`, data,this.httpOptions);
}

addReview(data: any): Observable<any> {
  return this.http.post('http://localhost:4500/reviews', data,this.httpOptions);
}

getReviewlist(): Observable<any> {
  return this.http.get('http://localhost:4500/reviews',this.httpOptions);
}
}
