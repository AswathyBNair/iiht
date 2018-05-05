import { Injectable } from '@angular/core';
import { workout } from './workout';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
private categoryAdd_url="http://localhost:8090/addCategory";

  constructor( private http:Http) { 
 }
  addCategory( title): Promise<workout> {
  let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
  return this.http.post(this.categoryAdd_url, title, options).toPromise()
             .then(this.extractData)
                   .catch(this.handleErrorPromise);
    alert(title);
    alert("saved");

    } 
  
  
        
    private extractData(res: Response) {
  let body = res.json();
        return body || {};
    }


 
  }





  


