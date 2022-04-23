import { Injectable } from '@angular/core';
import { ausers } from '../ausers';

@Injectable({
  providedIn: 'root'
})
export class AusersService {
  getAusers(){
    return ausers

  }

  constructor() { }
}
