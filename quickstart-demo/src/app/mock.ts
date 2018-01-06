import {User}from './user'; 

export const USER_DATA:User[] = [ {
    firstname:"Bill", 
    lastname:"Gates", 
    dob:new Date("Dec 24, 1965"), 
    income:50000, 
    isWorking:true, 
    company:"Microsoft", 
    image:"app/yoyo/bill.jpg", 
    vote:140
},  {
    firstname:"Albus", 
    lastname:"Dumbelore", 
    dob:new Date("Dec 24, 1765"), 
    income:80000, 
    isWorking:true, 
    company:"Hogwarts", 
    image:"app/yoyo/albus.jpg", 
    vote:140
},  {
    firstname:"Harry", 
    lastname:"Porter", 
    dob:new Date("Dec 24, 1990"), 
    income:0, 
    isWorking:false, 
    company:"Hogwarts", 
    image:"app/yoyo/harry.jpg", 
    vote:140
}
]