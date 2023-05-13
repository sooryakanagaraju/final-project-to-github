import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map, switchMap, throwError} from 'rxjs';
import { CoreService } from 'src/app/admin/services/core.service';
@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  httpOptions:any;
  constructor(private http:HttpClient, private cs:CoreService) { }

  checkIfObjectExists(obj: any): Observable<boolean> {
    return this.http.get<any[]>('http://localhost:4500/favourites').pipe(
      map(data => data.some(item => item.name === obj.name))
    );
  }
  postObject(obj: any): Observable<any> {
    return this.checkIfObjectExists(obj).pipe(
      switchMap(exists => {
        if (exists) {
          return throwError('Object already exists');
         
        } else {
          return this.http.post<any>('http://localhost:4500/favourites', obj);
        }
      })
    );
  }

  getfavourites():Observable<any> {
    return this.http.get("http://localhost:4500/favourites",this.httpOptions);
    
  }

  deletefavourites(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4500/favourites/${id}`);
  }

}
