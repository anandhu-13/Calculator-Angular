import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  tempInDeg:number=0
  tempInFh:number=0

  degToFh(){
    let result=(this.tempInDeg*(9/5)+32)
    this.tempInFh=result

  }
}

