import {Routes}from '@angular/router'
import {UserComponent }from './user.component'; 
import {AboutComponent }from './about.component'; 
import {ProductComponent }from './product.component'; 

export const APP_ROUTES:Routes = [ {
        path:'', 
        redirectTo:'/user', 
        pathMatch:'full'
    },  {
        path:'user', 
        component:UserComponent
    },  {
        path:'about', 
        component:AboutComponent
    },  {
        path:'product', 
        component:ProductComponent
    },  {
        path:'**', 
        redirectTo:'user'
    }, 
]