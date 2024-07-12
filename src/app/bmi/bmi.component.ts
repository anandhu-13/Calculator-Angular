import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  heightInCm:number=0
  weightInKg:number=0
  bmi:number=0

  calculateBmi(){
    this.bmi=this.weightInKg/(this.heightInCm/100)**2
  }

}
