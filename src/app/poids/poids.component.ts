import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {

  kg: number = 0;
  lbs: number = 0;

  constructor(private conversionService: ConversionService) { }

  ngOnInit(): void {
  }

  kgEnLbs(){
    this.lbs = this.conversionService.kgEnLbs (this.kg);
  }

  lbsEnKg(){ 
    this.kg = this.conversionService.lbsEnKg(this.lbs);
  }

}