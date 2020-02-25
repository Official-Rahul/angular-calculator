import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  expression: String='';

  constructor() { }

  ngOnInit(): void {
  }

  input(num:string){
    this.expression+=num;
  }

  calculate(){
    let result=math.evaluate(this.expression);
    this.expression+='\n='+result;
  }

  blank(){
    this.expression="";
  }
}
