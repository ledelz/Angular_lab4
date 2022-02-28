import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  celcius: number = 0;
  fahrenheit: number = 0;

  constructor(private conversionService: ConversionService) { }

  ngOnInit(): void {
  }

  celciusEnFahrenheit (){
    this.fahrenheit = this.conversionService.celciusEnFahrenheit (this.celcius);
  }

  fahrenheitEnCelcius(){ 
    this.celcius = this.conversionService.fahrenheitEnCelcius(this.fahrenheit);
  }

}