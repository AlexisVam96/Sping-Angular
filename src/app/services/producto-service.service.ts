import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  url: string = 'http://localhost:8080/api'

  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(`${this.url}/usuarios`);
  }

  exportarExcel(): Observable<Blob>{
    return this.http.get(`${this.url}/export/excel`,{ responseType: 'blob'})
  }


}
