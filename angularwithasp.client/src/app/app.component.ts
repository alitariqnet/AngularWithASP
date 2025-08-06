import { HttpClient } from '@angular/common/http';
import { Component, OnInit, input } from '@angular/core';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
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
    alert('Hello, there 👋')
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  onMouseOut() {
    this.message = '';
  }
  title = 'angularwithasp.client';
}
