import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.css']
})
export class CalorieComponent {

  height:number=0
  weight:number=0
  age:number=0
  gender:string=""

  activityLevel:any=1.2

  bmr:number=0

activityLevels=[
    {name:"sedentary",value:1.2},
    {name:"lightly active",value:1.375},
    {name:"moderately active",value:1.55},
    {name:"very active",value:1.725},
    {name:"extra active",value:1.9},

  ]

  calculateCalorie(){
    // console.log(this.height,this.weight,this.age,this.gender,this.activityLevel);
    if (this.gender=="male"){
      this.bmr=((10*this.weight) + (5.25*this.height) - (5*this.age) +5) *this.activityLevel
    } else {
      this.bmr=((10*this.weight) + (5.25*this.height) - (5*this.age) - 161) *this.activityLevel
      }
      console.log(this.bmr);

    }
    
    

  }



