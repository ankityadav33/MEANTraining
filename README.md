run "npm install"



# MEANTraining

Dependencies
============
systemjs: Loads the modules
core-js: "^2.4.1",
rxjs": To achieve the observable data
zone.js: service which gives the facility of binding the data in a certain environment
lite-server
loadash: Mathematical and string operations
@types: type definition file for node and jasmine
concurrently: executes two commands in parallel

devDependencies get removed when we deploy the code


/**********************************************/
Angular architecture
/**********************************************/
Root Module
A root module or any of the modules can have the following:
Component
Directives
Pipes
Services

A root module is the root of the tree containing te other modules where each module has a specific task.

EAch module is exported to the root module.

Root module is loaded into the browser.

The following have to be declared:
component
directives
pipes

The basic flow:
index.html -> main(js or ts)->loads AppModule which is the root module -> ./app/app.component(where the definition is present for what ever is to be displayed.)

There are 3 types of directives(@annotations in java):
Component: It has its own template, styles, business-logic
Attribute:  It doesn't change the DOM layout but changes the behaviour of the application. eg-> ng-class and ng-style
Structural: Changes the structure of the DOM and hence changes the behaviour of the application. eg-> mg-if, ng-for and ng-switch



//Component life cycle

- ngOnChanges : If a value is changed
- ngOnInit : when a compnent get intitilised on the page
- ngDoCheck : whenever there is a change with a variable
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy