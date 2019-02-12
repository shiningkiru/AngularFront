import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService  extends DataService {

  constructor(public http:HttpClient) { 
    super(http,'city')
  }
}
