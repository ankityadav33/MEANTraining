import {Person} from './Person'

//Classes
export class Student{
    private firstName: string;
    private lastName: string;
    constructor(obj: Person){
        this.firstName=obj.firstName;
        this.lastName=obj.lastName;
    }

    sayHi(): string{
        return "Hi "+this.firstName+ " " +this.lastName;
    }
}