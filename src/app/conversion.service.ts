import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }


  kgEnLbs(kg: number): number{
    let lbs=(kg*2.2046);
    return lbs;
  }
    
  lbsEnKg(lbs: number): number { 
    let kg = (lbs*0.4536);
    return kg;
  }

  celciusEnFahrenheit(celcius: number): number {
    let fahrenheit = Math.round((celcius * 9/5) + 32) ;
    return fahrenheit;
  }

  fahrenheitEnCelcius(fahrenheit: number): number {
    let celcius = Math.round((fahrenheit - 32) * 5/9)
    return celcius;
  }
  

}