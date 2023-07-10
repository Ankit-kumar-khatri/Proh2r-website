import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteInfoService {
  url = new BehaviorSubject<any>(null);
  myUrl=this.url.asObservable();
  constructor() { }

  setUrl(url:any){
    this.url.next(url);
  }
}
