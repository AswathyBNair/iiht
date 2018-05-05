import { Injectable } from '@angular/core';
import { workout } from '../workout';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WorkoutService {
private workout_url="";

  constructor( private http:Http) { 
 }
  submitForm(work: workout){
  alert(work.title);
    alert("saved");
  }





  


}