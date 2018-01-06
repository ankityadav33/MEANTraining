import {Injectable}from '@angular/core'
import {User }from './user'; 
import {USER_DATA }from './mock'; 
import {Http }from '@angular/http'; 
import 'rxjs/add/operator/map'
import {Observable }from 'rxjs/Observable'; 

@Injectable()
export class UserService {
    constructor(private http:Http) {}
    getUserData():Observable < User[] >  {
        return this.http.get("app/model/user-data.json").map(response =>< User[] > response.json().data); 
    }
}
