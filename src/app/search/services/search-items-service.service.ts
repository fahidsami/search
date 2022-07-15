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
  randomItems: RandomItem[] = [
    {
      id: 1,
      name: 'Aditya',
      profession: 'Developer',
    },
    {
      id: 2,
      name: 'Anaya',
      profession: 'Manager',
    },
    {
      id: 3,
      name: 'Ralf',
      profession: 'Junior Developer',
    },
    {
      id: 4,
      name: 'Random',
      profession: 'All rounder',
    },
    {
      id: 5,
      name: 'NoOne',
      profession: 'Observer',
    },
  ];
  constructor(private http: HttpClient) {}

  getItemsList():Observable<any>  {
    return this.http.get('https://run.mocky.io/v3/95e05c85-118e-403e-895a-41ac83d99e9a')
  }

  getDetails(id: number): Observable<any> {
    return this.http.get('https://run.mocky.io/v3/95e05c85-118e-403e-895a-41ac83d99e9a').pipe(map((data:any) => {return data.find((el:any) => el.id == id)}))
  }
}
