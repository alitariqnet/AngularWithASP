import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Component, OnInit, input } from '@angular/core';
import { signal, computed } from '@angular/core';

// Example of using Angular signals and computed properties
const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());
console.log(firstNameCapitalized()); // MORGAN


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  isEditable = true;
  style = { "background-color": "red", "height": "20px", "width": "100px" };
  draggable = true;
  message = '';

 
 

  constructor(private http: HttpClient) {
    // Application Reference
    var applicationRef = new ApplicationRef();
    console.log('AppComponent constructor called');
    console.log('ApplicationRef:', applicationRef);
    console.log('components:', applicationRef.components);
    console.log('componentTypes:', applicationRef.componentTypes);

  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  ngOnInit() {
    // 	Runs once after Angular has initialized all the component's inputs
    console.log('Component has been initialized -- ngOnInit lifecycle hook called');
    this.getForecasts();
  }

  ngOnChanges() {
    // 	Runs every time the component's inputs have changed.
    console.log('Component inputs have changed -- ngOnChanges lifecycle hook called');
  }

  ngDoCheck() {
    // Runs every time this component is checked for changes.
    console.log('Component has been checked for changes -- ngDoCheck lifecycle hook called');
  }

  ngAfterContentInit() {
    // Runs once after the component's content has been initialized.
    console.log('Content has been initialized -- ngAfterContentInit lifecycle hook called');
  }

  ngAfterContentChecked() {
    // Runs every time this component content has been checked for changes.
    console.log('Content has been checked -- ngAfterContentChecked lifecycle hook called');
  }

  ngAfterViewInit() {
    // Runs once after the component's view has been initialized.
    console.log('View has been initialized -- ngAfterViewInit lifecycle hook called');
  }

  ngAfterViewChecked() {
    // Runs every time the component's view has been checked for changes.
    console.log('View has been checked -- ngAfterViewChecked lifecycle hook called');
  }

  afterNextRender() {
    // Runs once the next time that all components have been rendered to the DOM.
    console.log('Next render has completed -- afterNextRender lifecycle hook called');
  }

  afterEveryRender() {
    // Runs every time all components have been rendered to the DOM.
    console.log('Component has been rendered -- afterEveryRender lifecycle hook called');
  }

  ngOnDestroy() {
    // Runs once before the component is destroyed.
    console.log('Component is being destroyed -- ngOnDestroy lifecycle hook called');
  }
  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  greet() {
    alert('Hello, there 👋 ' + firstNameCapitalized());
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  onMouseOut() {
    this.message = '';
  }
  onMouseDown() {
    this.message = 'You clicked me! 🖱️';
  }
  title = 'angularwithasp.client';
}
