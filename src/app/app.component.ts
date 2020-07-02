import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M5-TH-AngularCalculator';
  output: number;
  firstInput: number;
  secondInput: number;
  operator: String;
  constructor() {
  }
  // tslint:disable-next-line:typedef
  onChangeFirst(value){
    this.firstInput = Number(value);
  }
  // tslint:disable-next-line:typedef
  onChangeSecond(value){
    this.secondInput = Number(value);
  }
  // tslint:disable-next-line:typedef
  onChangeSelect(value){
    this.operator = value;
  }
  // tslint:disable-next-line:typedef
  calculate(){
    switch (this.operator) {
      case "+":
        this.output = this.firstInput + this.secondInput;
        break;
      case "-":
        this.output = this.firstInput - this.secondInput;
        break;
      case "*":
        this.output = this.firstInput * this.secondInput;
        break;
      case "/":
        this.output = this.firstInput / this.secondInput;
        break;
      default:
        break;
    }
  }
}
