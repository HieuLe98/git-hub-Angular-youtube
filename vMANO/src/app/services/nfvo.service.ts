import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nfvo } from '../models/nfvo.class';

@Injectable({
  providedIn: 'root'
})
export class NfvoService {
  public API: string = 'http://localhost:3000/nfvo';
  // public nfvo: Nfvo[] = [];
  constructor( private http: HttpClient ) { }

  getAllNfvo(): Observable<Nfvo[]> {
    return this.http.get<Nfvo[]>(this.API);
  }
}
