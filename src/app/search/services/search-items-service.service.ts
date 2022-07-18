import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface RandomItem {
  id: number;
  name: string;
  profession: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchItemsServiceService {
  constructor(private http: HttpClient) {}

  getItemsList():Observable<any>  {
    return this.http.get('https://run.mocky.io/v3/95e05c85-118e-403e-895a-41ac83d99e9a');
  }
}
