import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs : any = [{label:"Temperatures", link:"/temperature"},{label: "Poids", link: "/poids"}];
}
