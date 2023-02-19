import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public $typeView = new BehaviorSubject<'login' | 'register'>('login');

  constructor() { }
  
}
