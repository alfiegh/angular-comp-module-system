## The Module System in Angular

## Routing and Navigation in Angular

Small applications to briefly introduce modules in Angular, types of modules, how do they work, their reusability.

### Topics Covered

1. _Create a new Module_: **ng g m moduleName **(optional --routing for the module to have routing or not, useful when we create modules with routing/routed)

2. _Modules with routing_: Angular will create a routing module in the same folder as our module where the routing options will be available and we can configure on top of the class what things to show the user.

3. _Generate components inside modules_: **ng g c folderName/compName** in the CLI so the component is created inside the respective module.

4. _Import and Export Modules_: we have to form a specific link between modules for them to be shown somewhere else in the app. So we first need to export it (export the MODULE) and then we import the MODULE, not the component, where we want to use it. Essentially the module receiving the component will actually receive the whole exported module and its internal components then we can use it or reference it. This is also known as DOMAIN module exports/imports.

5. _Basic routing_: in the component routing module we say anytime user goes to a particular route, show that component on the screen. When routing components, we don't need to export them anymore. So to actually show the component as a page, (may need to delete the export from the module if not neccessary) inside the component routing module we set up a routing rule; we import the component and inside the Routes array we add one object with path and component. This is also known as ROUTED module exports/imports.

(Further on the prev two points. If we want to use the whole component inside another component we use step 4. If we want to display the whole component in its own page and section we use step 5)

6. _RouterOutlet_: the router outlet is Angular finding whaetever component matches the address in the URL and then showing that component should the path and component be defined before. It is sort of a window to show what is going to be displayed.

7. _Navigation with RouterLink_: one of the ways to show a navbar everywhere is to create such HTML on top of the router-outlet. Because the router outlet will show the matching component, all templates written above or below will show everywhere. By using routerLink attribute inside an a tag, we can just change the content without the need to refresh the whole page. This is because the routerLink talks directly to the Router inside the application.

8. _Styling Active Links_: Angular includes routerLinkActive as attribute to which we can pass a string (sort of a class). This works because Angular knows, when using routerLink, which one is being visited at the moment by the user.

9. _Adding Home and NotFound routes_: to show home component we follow previous steps but the path needs to be an empty string. To show NotFound for an url that does not match the path needs to be \*\* (double asterisk)

(some problems may arise when routing components, specially not found components. To solve this, normally we need to decide the order of the routing because Angular runs the routing from top to bottom until it matches a route. One fo the ways to do this, depending on folder structure, is to move the AppRoutingModule in app.module.ts to the end of the imports Array.)

10. _Lazy Loading in Angular_: find the modules we want to lazy load and are being imported somewhere in the application. remove import statements. In our main routing module, in this case App-routing.module.ts we can define a route object in the routes array with rules to specify when we want that module loaded. the important bit is after path we use loadChildren is a promise fn in there we import the module we want and matches the path and .then to resolve the promise. Once that is done we go to the children component we are lazy loading and if we already have a route defined with a path we make that path an empty string otherwise the loadChildren fn path we defined will merge with the component route defined too and we will have a repeated path (/path/path) as a result.

11. _Customize components_: standalone component that serve as placeholder in this project. We can customize components by passing configuration options. We use Input from ng/core in our comp module and ngIf in our template. Then in the parent component we can use property binding to pass a boolean. We can use custom structural directives to manipulate the template, such as the one we did before, times directive.

12. _Widget modules_: if we are going to repeat a module many times, small ones, we can create widgets to be reused across the application. A helper component module. In this app we will create a widget with h1 and subtitle, the divider component. Create a shared module and then a Divider component (our widget name).

13. _Grabbing content with NgContent_: If we are creating a widget and we want the widget to be used in several component but we want a more natural way of passing the data we can use NgContent. What this directive will do is it will make angular take any content that's inside the tags of another component. So by putting NgContent tags inside our divider h1 template we are telling angular to go grab whatever is inside our elements home component tags. Important to note inside a single template we can only have ONE ngContent.

14. _NgContent with Selects_: Select is an attribute that the NgContent has, we can use this to overcome the fact that there can only be one NgContent per template. Essentially by using select attribute we tell angular we want to select that specific element that's in the children. It works a bi different, we are still telling Angular to go grab this particular thing but we are actually telling specifically what we want to grab from the parent template. What we are selecting.

15. _Hiding empty elements that are shared_: done with CSS, in the component itself. We can grab the class name and use :empty after it, give it a display of none. Angular will look if the component is empty or not and will show or not.

16. _Creating a table component_: because objects can be messy, we can create reusable table components regardless of the key order when we are working with objects. We create an array of objects inside the parent component that we are going to pass down, we do the property binding by passing down the values to our child component. To make it reusable we declare data and more importantly headers arrays of objects, we will iterate through this array of objs of headers that will have a key and label value and by doing nested iteration we can match the data array whose keys match the headers array.

17. _Input Aliasing_: passing a string within the Input parenthesis so we can call it differently and use that alias instead where our child component is being rendered to pass down the same information (i.e ClassNames to 'Class' in the table component.)

18. _Child navigation routes_: We need to create, if we are using lazy loading and all of that, in the routes array we have created before with path and component we need to add children key whose values will be an array of objects, in our case these objects will be the different components we want to show with their paths and component same as we are doing in the normal routing. We will use the router outlet again in whichever component we are using these children routes.

19. _RouterLink other configurations_: there are manby ways routerLink works. In our tab menu case, if we click on the empty string path, we are taken back to the home page. RouterLink works with relative routes and the relative routes are coming from the relative component. So in our tab menu section, our relative parent is the parent component and because our path is an empty string it will take us there. In our case to fix this we add ./ to the route, just to tell routerLink take me to the straight relative path not the empty string and make sure we are using routerLinkOptions with exact path.

20. _Accesing host components_: by using ElementRef inside a comoponent class we can get access to the host element. We need to do it inside the constructor in this case. So say we want to append a modal to the body (or any other element) we would use ElementRef and because we have access to it we can use "document.body.appendChild(this.el.nativeElement)" inside the NgOnInit method of the class.

21. _Working with modals_: how to handle modals in Angular and the lifecycle hooks methods that accompany the component. Refresher on child to parent communication with Output and EventEmitter.

22. _ngOnInit_: is a lifecycle hook for Angular. Other lifecycles hook in Angular are ngOnDestroy and ngOnChanges.

    21.1) ngOnInit: called once after this component is first displayed on the screen and after Angular has set any properties passed down from the parent component. In here we can get access to data that has been provided by a parent component. The earliest we can get access to data being passed down, should we need to, is inside this ngOnInit and not inside the constructor.

    21.2) ngOnDestroy: Called once when Angular is about to remove the component.

    21.2) ngOnChanges: called anytime a property of the component is changed, including when a parent component passes down new data.

23. _ngOnDestroy_: as mentioned before, this hook will be called every time we want to delete or remove a component. We use it as a lifecycle hook, inside the component class.

24. _Prevent event bubbling_: we can choose the element where we want the bubbling to stop and call on click to trigger $event and then the function stopPropagation().

25. _Making an Accordion comp_: the process is similar to others. Create your data variable source in the parent component, pass it on to the app-accordion where you are displaying. Go to your accordion component, expect to receive an input named the same as the data variable you created and style the html of accordion to receive it accordingly. The new trick here is...how to select just one of them to open at a time. We can create a variable called openIndexItem to just expand the active element, we can initialize it to zero. We can know the index, remember, by grabbing it from the ngFor directive. Then we can simply make a comparison between the index and the openItem variable and only add the active class with ngClass should they match. After that we need to add a click event handler that whenever someone clicks on an accordion title it will change the index -so we need to pass the i to that click handler-
