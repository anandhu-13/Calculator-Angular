import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {

  result:number=0

  performAddition(box1:any,box2:any){

    let num1= +box1.value
    let num2= +box2.value

    console.log(num1+num2);
    
    this.result=num1+num2
    
  }

}


