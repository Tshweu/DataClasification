import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new BehaviorSubject<any>([{}]);
  currentData = this.data.asObservable();
  constructor() { }

  updateData(data){
    this.data.next(data);
  }

  //missionAnnounced$ = this.announced.asObservable();
}
