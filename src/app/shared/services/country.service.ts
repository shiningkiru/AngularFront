import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService  extends DataService {

  constructor(public http:HttpClient) { 
    super(http,'country')
  }
}
