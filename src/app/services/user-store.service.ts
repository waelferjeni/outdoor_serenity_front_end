import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private id$ = new BehaviorSubject<string>('');

  private role$ = new BehaviorSubject<string>('');


  constructor() {}

  public getIdFromStore() {
    return this.id$.asObservable();
  }
  public setIdForStore(id: string) {
    this.id$.next(id);
  }
  public getRoleFromStore() {
    return this.role$.asObservable();
  }
  public setRoleForStore(role: string) {
    this.role$.next(role);
  }
}