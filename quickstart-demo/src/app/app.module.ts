import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {FormsModule}from '@angular/forms'; 


import {AppComponent }from './app.component'; 
import {UserComponent }from './user.component'; 

import {DoubleMePipe}from './doubleme.pipe'
import {UserService }from './user.service'; 
import {HttpModule}from '@angular/http'; 
import {AboutComponent }from './about.component'; 
import {ProductComponent }from './product.component'; 
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.route';


@NgModule( {
imports:[ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(APP_ROUTES)], 
declarations:[ AppComponent, UserComponent, DoubleMePipe, ProductComponent, AboutComponent], 
providers:[UserService], 
bootstrap:[ AppComponent ]
})
export class AppModule {}
