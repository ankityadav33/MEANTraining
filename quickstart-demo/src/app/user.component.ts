import {Component}from '@angular/core'; 
import {isWorker }from 'cluster'; 
import {User}from './user'; 
import {USER_DATA}from './mock'; 
import {UserService }from './user.service'; 

@Component( {
    
    templateUrl:`./view/user.component.html`, 
    styleUrls:[`./styles/user.component.css`]
})
export class UserComponent {

    constructor(private userService:UserService) {
        console.log('constructor called!!!'); 
        //this.users=this.userService.getUserData();
        this.userService.getUserData().subscribe(users => this.users = users); 
    }

    moreInfo(user:any) {
        alert(user.firstname + " is working with " + user.company + "!!!"); 
    }
    users:User[]; 


     ngOnChanges() {console.log("ngOnChanges")}
     ngOnInit() {
         console.log("ngOnInit"); 
         this.users = USER_DATA; 
    }
     ngDoCheck() {console.log("ngDoCheck")}
     ngAfterContentInit() {console.log("ngAfterContentInit")}
     ngAfterContentChecked() {console.log("ngAfterContentChecked")}
     ngAfterViewInit() {console.log("ngAfterViewInit")}
     ngAfterViewChecked() {console.log("ngAfterViewChecked")}
     ngOnDestroy() {console.log("ngOnDestroy")}
}